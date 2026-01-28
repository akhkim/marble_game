import { RenderParameters } from './rouletteRenderer';
import { MouseEventArgs, UIObject } from './UIObject';
import { bound } from './utils/bound.decorator';
import { Rect } from './types/rect.type';
import { Marble } from './marble';
import { GameMode } from './roulette';

export class RankRenderer implements UIObject {
  private _currentY = 0;
  private _targetY = 0;
  private fontHeight = 16;
  private _userMoved = 0;
  private _currentWinner = -1;
  private maxY = 0;
  private winners: Marble[] = [];
  private marbles: Marble[] = [];
  private winnerRank: number = -1;
  private messageHandler?: (msg: string) => void;
  private gameMode: GameMode = 'individual';
  private teamCounts: Map<string, number> = new Map();
  private teamFinished: Map<string, number> = new Map();
  private teamWinners: string[] = [];

  constructor() {
  }

  @bound
  onWheel(e: WheelEvent) {
    this._targetY += e.deltaY;
    if (this._targetY > this.maxY) {
      this._targetY = this.maxY;
    }
    this._userMoved = 2000;
  }

  @bound
  onDblClick(e?: MouseEventArgs) {
    if (e) {
      if (navigator.clipboard) {
        const tsv: string[] = [];
        let rank = 0;
        tsv.push(...[...this.winners, ...this.marbles].map((m) => {
          rank++;
          return [rank.toString(), m.name, rank - 1 === this.winnerRank ? '☆' : ''].join('\t');
        }));

        tsv.unshift(['Rank', 'Name', 'Winner'].join('\t'));

        navigator.clipboard.writeText(tsv.join('\n')).then(() => {
          if (this.messageHandler) {
            this.messageHandler('The result has been copied');
          }
        });
      }
    }
  }

  onMessage(func: (msg: string) => void) {
    this.messageHandler = func;
  }

  render(
    ctx: CanvasRenderingContext2D,
    { winners, marbles, winnerRank, theme, gameMode, teamCounts, teamFinished, teamWinners }: RenderParameters,
    width: number,
    height: number,
  ) {
    const startX = width - 5;
    const startY = Math.max(-this.fontHeight, this._currentY - height / 2);

    this.winners = winners;
    this.marbles = marbles;
    this.winnerRank = winnerRank;
    this.gameMode = gameMode;
    this.teamCounts = teamCounts;
    this.teamFinished = teamFinished;
    this.teamWinners = teamWinners;

    // Team mode rendering
    if (gameMode === 'team') {
      this._renderTeamMode(ctx, width, height, startX, startY, theme, winnerRank);
      return;
    }

    // Individual mode rendering (original)
    this.maxY = Math.max(
      0,
      (marbles.length + winners.length) * this.fontHeight + this.fontHeight,
    );
    this._currentWinner = winners.length;

    ctx.save();
    ctx.textAlign = 'right';
    ctx.font = '10pt sans-serif';
    ctx.fillStyle = '#666';
    ctx.fillText(`${winners.length} / ${winners.length + marbles.length}`, width - 5, this.fontHeight);

    ctx.beginPath();
    ctx.rect(width - 150, this.fontHeight + 2, width, this.maxY);
    ctx.clip();

    ctx.translate(0, -startY);
    ctx.font = 'bold 11pt sans-serif';
    if (theme.rankStroke) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = theme.rankStroke;
    }
    winners.forEach((marble: { hue: number, name: string }, rank: number) => {
      const y = rank * this.fontHeight;
      if (y >= startY && y <= startY + ctx.canvas.height) {
        ctx.fillStyle = `hsl(${marble.hue} 100% ${theme.marbleLightness}`;
        ctx.strokeText(
          `${rank === winnerRank ? '☆' : '\u2714'} ${marble.name} #${rank + 1}`,
          startX,
          20 + y,
        );
        ctx.fillText(
          `${rank === winnerRank ? '☆' : '\u2714'} ${marble.name} #${rank + 1}`,
          startX,
          20 + y,
        );
      }
    });
    ctx.font = '10pt sans-serif';
    marbles.forEach((marble: { hue: number; name: string }, rank: number) => {
      const y = (rank + winners.length) * this.fontHeight;
      if (y >= startY && y <= startY + ctx.canvas.height) {
        ctx.fillStyle = `hsl(${marble.hue} 100% ${theme.marbleLightness}`;
        ctx.strokeText(
          `${marble.name} #${rank + 1 + winners.length}`,
          startX,
          20 + y,
        );
        ctx.fillText(
          `${marble.name} #${rank + 1 + winners.length}`,
          startX,
          20 + y,
        );
      }
    });
    ctx.restore();
  }

  private _renderTeamMode(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    startX: number,
    startY: number,
    theme: { rankStroke?: string; marbleLightness: number },
    winnerRank: number,
  ) {
    // Build team list: finished teams first, then active teams sorted by progress
    const finishedTeams = [...this.teamWinners];
    const activeTeams: { name: string; finished: number; total: number; progress: number }[] = [];
    
    this.teamCounts.forEach((total, name) => {
      if (!finishedTeams.includes(name)) {
        const finished = this.teamFinished.get(name) || 0;
        activeTeams.push({ name, finished, total, progress: finished / total });
      }
    });
    
    // Sort active teams by progress (most finished first)
    activeTeams.sort((a, b) => b.progress - a.progress || b.finished - a.finished);
    
    const allTeams = [
      ...finishedTeams.map((name) => ({
        name,
        finished: this.teamCounts.get(name) || 0,
        total: this.teamCounts.get(name) || 0,
        isFinished: true,
      })),
      ...activeTeams.map((t) => ({ ...t, isFinished: false })),
    ];
    
    this.maxY = Math.max(0, allTeams.length * this.fontHeight + this.fontHeight);
    this._currentWinner = finishedTeams.length;

    ctx.save();
    ctx.textAlign = 'right';
    ctx.font = '10pt sans-serif';
    ctx.fillStyle = '#666';
    ctx.fillText(`Teams: ${finishedTeams.length} / ${allTeams.length} finished`, width - 5, this.fontHeight);

    ctx.beginPath();
    ctx.rect(width - 180, this.fontHeight + 2, width, this.maxY);
    ctx.clip();

    ctx.translate(0, -startY);
    
    if (theme.rankStroke) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = theme.rankStroke;
    }

    allTeams.forEach((team, index) => {
      const y = index * this.fontHeight;
      if (y >= startY && y <= startY + ctx.canvas.height) {
        // Get hue from first marble with this name
        const marble = this.winners.find((m) => m.name === team.name) || 
                       this.marbles.find((m) => m.name === team.name);
        const hue = marble ? marble.hue : 0;
        
        ctx.fillStyle = `hsl(${hue} 100% ${theme.marbleLightness}`;
        
        const isWinner = index === winnerRank;
        const prefix = team.isFinished ? (isWinner ? '☆' : '\u2714') : '';
        const text = `${prefix} ${team.name} ${team.finished}/${team.total}`;
        
        ctx.font = team.isFinished ? 'bold 11pt sans-serif' : '10pt sans-serif';
        ctx.strokeText(text, startX, 20 + y);
        ctx.fillText(text, startX, 20 + y);
      }
    });
    
    ctx.restore();
  }

  update(deltaTime: number) {
    if (this._currentWinner === -1) {
      return;
    }
    if (this._userMoved > 0) {
      this._userMoved -= deltaTime;
    } else {
      this._targetY = this._currentWinner * this.fontHeight + this.fontHeight;
    }
    if (this._currentY !== this._targetY) {
      this._currentY += (this._targetY - this._currentY) * (deltaTime / 250);
    }
    if (Math.abs(this._currentY - this._targetY) < 1) {
      this._currentY = this._targetY;
    }
  }

  getBoundingBox(): Rect | null {
    return null;
  }
}
