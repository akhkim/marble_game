import { MapEntity } from '../types/MapEntity.type';

export type StageDef = {
  title: string;
  entities?: MapEntity[];
  goalY: number;
  zoomY: number;
};

export const stages: StageDef[] = [
  {
    title: 'Wheel of fortune',
    goalY: 111,
    zoomY: 106.75,
    entities: [
      // polyline
      {
        position: { x: 0, y: 0 },
        shape: {
          type: 'polyline',
          points: [
            [16.5, -300],
            [9.25, -300],
            [9.25, 8.5],
            [2, 19.25],
            [2, 26],
            [9.75, 30],
            [9.75, 33.5],
            [1.25, 41],
            [1.25, 53.75],
            [8.25, 58.75],
            [8.25, 63],
            [9.25, 64],
            [8.25, 65],
            [8.25, 99.25],
            [15.1, 106.75],
            [15.1, 111.75],
          ],
          rotation: 0,
        },
        type: 'static',
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 9.25],
            [9.5, 20],
            [9.5, 22.5],
            [17.5, 26],
            [17.5, 33.5],
            [24, 38.5],
            [19, 45.5],
            [19, 55.5],
            [24, 59.25],
            [24, 63],
            [23, 64],
            [24, 65],
            [24, 100.5],
            [16, 106.75],
            [16, 111.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points:
            [
              [12.75, 37.5],
              [7, 43.5],
              [7, 49.75],
              [12.75, 53.75],
              [12.75, 37.5],
            ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points:
            [
              [14.75, 37.5],
              [14.75, 43],
              [17.5, 40.25],
              [14.75, 37.5],
            ],
        },
      },
      // boxes
      {
        position: { x: 15.5, y: 30.0 },
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45 },
        type: 'static',
        props: { density: 1, angularVelocity: 0, restitution: 1 },
      },
      {
        position: { x: 15.5, y: 32 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.5, y: 28 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 30 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 32 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 28 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.4, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11.3, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.1, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18.9, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.699999999999996, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.7, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.4, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11.3, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.1, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18.9, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.699999999999996, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.7, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.1, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.5, y: 92 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.75, y: 92 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 16, y: 92 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.25, y: 92 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 92 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11, y: 95 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 14.25, y: 95 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17.5, y: 95 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.75, y: 95 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.5, y: 98 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.75, y: 98 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 16, y: 98 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.25, y: 98 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 98 },
        type: 'static',
        shape: {
          type: 'box',
          width: 0.25,
          height: 0.25,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },

      // wheels
      {
        position: { x: 8, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 12, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -3.5, restitution: 0 },
      },
      {
        position: { x: 16, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 20, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -3.5, restitution: 0 },
      },
      {
        position: { x: 24, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 14, y: 106.75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -1.2, restitution: 0 },
      },
    ],
  },
  {
    'title': 'BubblePop',
    'goalY': 83,
    'zoomY': 78,
    'entities': [{
      'type': 'static',
      'position': { 'x': 10.375, 'y': -108.5 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': {
        'type': 'polyline',
        'rotation': 0,
        'points': [[6.125, -191.5], [-1.125, -191.5], [-1.125, 108.5], [-1.125, 151.5], [-6.125, 158.5], [-1.125, 161.5], [-1.125, 179.5], [-0.9128679656440362, 179.7498817789222], [-1.125, 179.9997635578444], [-1.125, 183.5], [1.625, 188.5], [1.625, 191.5]],
      },
    }, {
      'type': 'static',
      'position': { 'x': 16.25, 'y': -108.5 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': {
        'type': 'polyline',
        'rotation': 0,
        'points': [[0.25, -191.5], [0.25, 158.5], [3.25, 162.5], [2.25, 164.5], [3.25, 166.5], [0.25, 169.5], [0.25, 179.5], [0.03786796564403616, 179.75925677892224], [0.25, 179.9997635578444], [0.25, 183.5], [-3.25, 188.5], [-3.25, 191.5]],
      },
    }, {
      'type': 'static',
      'position': { 'x': 16.5, 'y': 55.75 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': {
        'type': 'polyline',
        'rotation': 0,
        'points': [[0, -3.25], [1, -1.75], [0, 0.25], [1, 2.25], [0, 3.25], [-1, 0.25], [0, -3.25]],
      },
    }, {
      'type': 'static',
      'position': { 'x': 10.375, 'y': 48.25 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': {
        'type': 'polyline',
        'rotation': 0,
        'points': [[-1.125, -2.75], [-4.125, 1.25], [-1.125, 2.75], [4.125, 2.25], [-1.125, -2.75]],
      },
    }, {
      'type': 'static',
      'position': { 'x': 10.15625, 'y': 26.75 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'polyline', 'rotation': 0, 'points': [[-0.90625, -0.75], [0.90625, 0.75]] },
    }, {
      'type': 'static',
      'position': { 'x': 15.59375, 'y': 26.75 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'polyline', 'rotation': 0, 'points': [[0.90625, -0.75], [-0.90625, 0.75]] },
    }, {
      'type': 'static',
      'position': { 'x': 12.875, 'y': 29.25 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'polyline', 'rotation': 0, 'points': [[-1.8125, 0.75], [0, -0.75], [1.8125, 0.75]] },
    }, {
      'type': 'static',
      'position': { 'x': 10.15625, 'y': 31.75 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'polyline', 'rotation': 0, 'points': [[-0.90625, -0.75], [0.90625, 0.75]] },
    }, {
      'type': 'static',
      'position': { 'x': 15.59375, 'y': 31.75 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'polyline', 'rotation': 0, 'points': [[0.90625, -0.75], [-0.90625, 0.75]] },
    }, {
      'type': 'static',
      'position': { 'x': 12.875, 'y': 34.25 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'polyline', 'rotation': 0, 'points': [[-1.8125, 0.75], [0, -0.75], [1.8125, 0.75]] },
    }, {
      'type': 'static',
      'position': { 'x': 9.25, 'y': 18 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 11.25, 'y': 18 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 13.25, 'y': 18 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 15.25, 'y': 18 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 10.5, 'y': 19 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 12.5, 'y': 19 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 14.5, 'y': 19 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 16.5, 'y': 19 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 9.25, 'y': 20 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 11.25, 'y': 20 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 13.25, 'y': 20 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 15.25, 'y': 20 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 10.5, 'y': 21 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 12.5, 'y': 21 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 14.5, 'y': 21 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 16.5, 'y': 21 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 9.25, 'y': 22 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 11.25, 'y': 22 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 13.25, 'y': 22 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 15.25, 'y': 22 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 10.5, 'y': 23 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 12.5, 'y': 23 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 14.5, 'y': 23 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 16.5, 'y': 23 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 0.15, 'height': 0.15 },
    }, {
      'type': 'static',
      'position': { 'x': 9.400000000000002, 'y': 39 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 3, 'height': 3 },
    }, {
      'type': 'static',
      'position': { 'x': 16.5, 'y': 43 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0.7853981633974483, 'width': 3, 'height': 3 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 10.7, 'y': 10 },
      'props': { 'angularVelocity': 10, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 0.5, 'height': 0.1 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 14.7, 'y': 10 },
      'props': { 'angularVelocity': -10, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 0.5, 'height': 0.1 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 12.7, 'y': 10 },
      'props': { 'angularVelocity': 10, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 0.5, 'height': 0.1 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 10.7, 'y': 14 },
      'props': { 'angularVelocity': -3, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 2, 'height': 0.1 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 14.7, 'y': 14 },
      'props': { 'angularVelocity': 3, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 2, 'height': 0.1 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 11.2, 'y': 44 },
      'props': { 'angularVelocity': -5, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 0.5, 'height': 0.1 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 10.3, 'y': 75 },
      'props': { 'angularVelocity': 8, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 1, 'height': 0.1 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 15.462132034355964, 'y': 75 },
      'props': { 'angularVelocity': -8, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 1, 'height': 0.1 },
    }, {
      'type': 'static',
      'position': { 'x': 11, 'y': 65 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 13, 'y': 65 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 15, 'y': 65 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 12, 'y': 67.5 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 14, 'y': 67.5 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 13, 'y': 69.77058813837772 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.8 },
    }, {
      'type': 'static',
      'position': { 'x': 10.7, 'y': 77.5 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.8 },
    }, {
      'type': 'static',
      'position': { 'x': 14.7, 'y': 77.5 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.8 },
    }, {
      'type': 'static',
      'position': { 'x': 12.625, 'y': 80 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 1.5 },
    }, {
      'type': 'static',
      'position': { 'x': 12.625, 'y': 80 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 1.2 },
    }, {
      'type': 'kinematic',
      'position': { 'x': 12.625, 'y': 56.00000000000001 },
      'props': { 'angularVelocity': -8, 'density': 1, 'restitution': 0 },
      'shape': { 'type': 'box', 'rotation': 0, 'width': 1, 'height': 0.1 },
    }, {
      'type': 'static',
      'position': { 'x': 9.947604593262161, 'y': 62.59581680393866 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 11.947604593262161, 'y': 62.59581680393866 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 13.947604593262161, 'y': 62.59581680393866 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }, {
      'type': 'static',
      'position': { 'x': 15.828283102570442, 'y': 62.59581680393866 },
      'props': { 'angularVelocity': 0, 'density': 1, 'restitution': 1.5, 'life': 1 },
      'shape': { 'type': 'circle', 'radius': 0.5 },
    }],
  },
  {
    title: 'Pot of greed',
    goalY: 111,
    zoomY: 110,
    entities: [
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [17, -300],
            [9, -300],
            [9, 8.5],
            [2, 15],
            [6, 61.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [7, 71],
            [9, 101],
            [8, 100.5],
            [6, 100],
            [5, 90],
            [4, 70],
            [7, 71],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [17, -300],
            [17, 8.5],
            [24, 15],
            [20, 61.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [19, 71],
            [17, 101],
            [18, 100.5],
            [20, 100],
            [21, 90],
            [22, 70],
            [19, 71],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [11, 88],
            [12, 90],
            [12, 112],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [15, 88],
            [14, 90],
            [14, 112],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [12, 102],
            [11, 103],
            [9, 104],
            [8, 104],
            [6, 103],
            [5, 102],
            [4, 100],
            [3, 90],
            [2, 70],
            [3, 65],
            [4, 63],
            [5, 62],
            [6, 61.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [14, 102],
            [15, 103],
            [17, 104],
            [18, 104],
            [20, 103],
            [21, 102],
            [22, 100],
            [23, 90],
            [24, 70],
            [23, 65],
            [22, 63],
            [21, 62],
            [20, 61.5],
          ],
        },
      },
      {
        position: { x: 13, y: 20 },
        type: 'static',
        shape: {
          type: 'box',
          width: 3,
          height: 3,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13, y: 55 },
        type: 'static',
        shape: {
          type: 'box',
          width: 3,
          height: 3,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 8, y: 37 },
        type: 'static',
        shape: {
          type: 'box',
          width: 2,
          height: 2,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18, y: 37 },
        type: 'static',
        shape: {
          type: 'box',
          width: 2,
          height: 2,
          rotation: 0.7853981633974483,
        },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11, y: 12 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -3, restitution: 0 },
      },
      {
        position: { x: 15, y: 12 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 3, restitution: 0 },
      },
      {
        position: { x: 8, y: 104 },
        type: 'kinematic',
        shape: { type: 'box', width: 1, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 6, y: 103 },
        type: 'kinematic',
        shape: { type: 'box', width: 1.5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 4, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 1.5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 3.5, y: 95 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 3, y: 90 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.75, y: 85 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.5, y: 80 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.25, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2, y: 70 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 18, y: 104 },
        type: 'kinematic',
        shape: { type: 'box', width: 1, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 20, y: 103 },
        type: 'kinematic',
        shape: { type: 'box', width: 1.5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 22, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 1.5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 95 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23, y: 90 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.25, y: 85 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.5, y: 80 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.75, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 24, y: 70 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
    ],
  },
  {
    title: 'Yoru ni Kakeru',
    goalY: 248,
    zoomY: 234.5,
    entities: [
      {
        position: { x: 2, y: 0 },
        shape: {
          type: 'box',
          width: 1,
          height: 800,
          rotation: 0,
          color: '#222',
          bloomColor: '#777',
        },
        type: 'static',
        props: { density: 500, angularVelocity: 0, restitution: 0 },
      },
      {
        type: 'static',
        position: { x: 21, y: 0 },
        props: { density: 500, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'box',
          rotation: 0,
          width: 1,
          height: 800,
          color: '#222',
          bloomColor: '#777',
        },
      },
      {
        position: { x: 4.0, y: 25.0 },
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        type: 'static',
        props: { density: 1, angularVelocity: 0, restitution: 1 },
      },
      {
        position: { x: 4.0, y: 30.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 4.0, y: 35.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 4.0, y: 40.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.0, y: 25.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.0, y: 30.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.0, y: 35.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.0, y: 40.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 14.0, y: 25.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 14.0, y: 30.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 14.0, y: 35.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 14.0, y: 40.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.0, y: 25.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.0, y: 30.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.0, y: 35.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.0, y: 40.0 },
        type: 'static',
        shape: { type: 'box', width: 0.2, height: 0.2, rotation: -45, color: '#818fb4' },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },

      {
        position: { x: 6.5, y: 27.5 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#9bec00' },
        props: { density: 1, angularVelocity: 2.0, restitution: 0 },
      },
      {
        position: { x: 6.5, y: 37.5 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#ff6868' },
        props: { density: 1, angularVelocity: 2.0, restitution: 0 },
      },
      {
        position: { x: 11.5, y: 32.5 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#80b3ff' },
        props: { density: 2, angularVelocity: 4.0, restitution: 0 },
      },
      {
        position: { x: 16.5, y: 27.5 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#ff6868' },
        props: { density: 1, angularVelocity: -2.0, restitution: 0 },
      },
      {
        position: { x: 16.5, y: 37.5 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#9bec00' },
        props: { density: 1, angularVelocity: -2.0, restitution: 0 },
      },

      {
        position: { x: 10.0, y: 26.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 26.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.0, y: 26.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.0, y: 27.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 27.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.0, y: 27.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.0, y: 29.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 29.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.0, y: 29.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 5.0, y: 31.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 31.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.0, y: 31.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.0, y: 32.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 32.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.0, y: 32.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.0, y: 34.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 34.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.0, y: 34.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 15.0, y: 31.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 31.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.0, y: 31.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.0, y: 32.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 32.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.0, y: 32.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.0, y: 34.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 34.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.0, y: 34.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 10.0, y: 36.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 36.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.0, y: 36.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.0, y: 37.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 37.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.0, y: 37.5 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.0, y: 39.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 39.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.0, y: 39.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 11.5, y: 50.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 6.5, height: 0.1, rotation: 0, color: '#5c5470' },
        props: { density: 1, angularVelocity: -2.0, restitution: 0 },
      },

      {
        position: { x: 3.5, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.0, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.0, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.0, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.0, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.0, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 20.0, y: 60.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 3.0, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.5, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.0, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.0, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.5, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.0, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.5, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.0, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.0, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 63.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe227' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 3.5, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.0, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.0, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.0, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.0, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.0, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 20.0, y: 66.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#fff4b7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 4.5, y: 75.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 4.0, height: 0.1, rotation: 0, color: '#ff577f' },
        props: { density: 1, angularVelocity: -4.0, restitution: 0 },
      },
      {
        position: { x: 18.5, y: 75.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 4.0, height: 0.1, rotation: 0, color: '#ff577f' },
        props: { density: 1, angularVelocity: 4.0, restitution: 0 },
      },

      {
        position: { x: 3.8, y: 90.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.0, restitution: 0 },
      },
      {
        position: { x: 19.2, y: 90.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.0, restitution: 0 },
      },
      {
        position: { x: 5.8, y: 92.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.2, restitution: 0 },
      },
      {
        position: { x: 17.2, y: 92.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.2, restitution: 0 },
      },
      {
        position: { x: 7.8, y: 94.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.4, restitution: 0 },
      },
      {
        position: { x: 15.2, y: 94.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.4, restitution: 0 },
      },
      {
        position: { x: 9.8, y: 96.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 96.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },

      {
        position: { x: 3.8, y: 94.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.2, restitution: 0 },
      },
      {
        position: { x: 19.2, y: 94.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.2, restitution: 0 },
      },
      {
        position: { x: 5.8, y: 96.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.4, restitution: 0 },
      },
      {
        position: { x: 17.2, y: 96.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.4, restitution: 0 },
      },
      {
        position: { x: 7.8, y: 98.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },
      {
        position: { x: 15.2, y: 98.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },
      {
        position: { x: 9.8, y: 100.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.8, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 100.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.8, restitution: 0 },
      },

      {
        position: { x: 10.0, y: 90.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.0, y: 90.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.0, y: 92.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.0, y: 92.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.0, y: 94.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.0, y: 94.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.0, y: 96.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.0, y: 96.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ffe3fe' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 10.0, y: 94.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.0, y: 94.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.0, y: 96.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.0, y: 96.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.0, y: 98.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.0, y: 98.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.0, y: 100.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.0, y: 100.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff94cc' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 4.5, y: 100.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 5.0, height: 0.1, rotation: 0, color: '#5c8374' },
        props: { density: 1, angularVelocity: -2.5, restitution: 0 },
      },
      {
        position: { x: 18.5, y: 100.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 5.0, height: 0.1, rotation: 0, color: '#5c8374' },
        props: { density: 1, angularVelocity: 2.5, restitution: 0 },
      },

      {
        position: { x: 3.8, y: 104.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.4, restitution: 0 },
      },
      {
        position: { x: 19.2, y: 104.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.4, restitution: 0 },
      },
      {
        position: { x: 5.8, y: 106.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },
      {
        position: { x: 17.2, y: 106.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },
      {
        position: { x: 7.8, y: 108.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.8, restitution: 0 },
      },
      {
        position: { x: 15.2, y: 108.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 1.8, restitution: 0 },
      },
      {
        position: { x: 9.8, y: 110.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 2.0, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 110.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#c7ffd8' },
        props: { density: 1, angularVelocity: 2.0, restitution: 0 },
      },

      {
        position: { x: 3.8, y: 108.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },
      {
        position: { x: 19.2, y: 108.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.6, restitution: 0 },
      },
      {
        position: { x: 5.8, y: 110.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.8, restitution: 0 },
      },
      {
        position: { x: 17.2, y: 110.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 1.8, restitution: 0 },
      },
      {
        position: { x: 7.8, y: 112.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 2.0, restitution: 0 },
      },
      {
        position: { x: 15.2, y: 112.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 2.0, restitution: 0 },
      },
      {
        position: { x: 9.8, y: 114.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 2.2, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 114.0 },
        type: 'static',
        shape: { type: 'box', width: 0.1, height: 0.1, rotation: -90, color: '#98ded9' },
        props: { density: 1, angularVelocity: 2.2, restitution: 0 },
      },

      {
        position: { x: 3.5, y: 105.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 105.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 3.5, y: 107.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 107.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 107.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 107.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 3.5, y: 109.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 109.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 109.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 109.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 109.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 109.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#edeef7' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 5.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#e6176d' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 5 },
      },
      {
        position: { x: 17.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#e6176d' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 5 },
      },
      {
        position: { x: 5.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#e64588' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 4 },
      },
      {
        position: { x: 17.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#e64588' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 4 },
      },
      {
        position: { x: 5.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 2.0, color: '#e673a3' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 3 },
      },
      {
        position: { x: 17.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 2.0, color: '#e673a3' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 3 },
      },
      {
        position: { x: 5.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 2.8, color: '#e6a1bd' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 2 },
      },
      {
        position: { x: 17.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 2.8, color: '#e6a1bd' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 2 },
      },
      {
        position: { x: 5.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 3.8, color: '#e6cfd8' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 115.0 },
        type: 'static',
        shape: { type: 'circle', radius: 3.8, color: '#e6cfd8' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 11.5, y: 120.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#e6176d' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 5 },
      },
      {
        position: { x: 11.5, y: 120.0 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#e64588' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 4 },
      },
      {
        position: { x: 11.5, y: 120.0 },
        type: 'static',
        shape: { type: 'circle', radius: 2.0, color: '#e673a3' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 3 },
      },
      {
        position: { x: 11.5, y: 120.0 },
        type: 'static',
        shape: { type: 'circle', radius: 2.8, color: '#e6a1bd' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 2 },
      },
      {
        position: { x: 11.5, y: 120.0 },
        type: 'static',
        shape: { type: 'circle', radius: 3.8, color: '#e6cfd8' },
        props: { angularVelocity: 0.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 4.5, y: 130.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 5.0, height: 0.1, rotation: 0, color: '#435585' },
        props: { density: 1, angularVelocity: 0.25, restitution: 0 },
      },
      {
        position: { x: 18.5, y: 130.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 5.0, height: 0.1, rotation: 0, color: '#5c8374' },
        props: { density: 1, angularVelocity: -0.32, restitution: 0 },
      },
      {
        position: { x: 4.5, y: 140.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 4.0, height: 0.1, rotation: 30, color: '#610c9f' },
        props: { density: 1, angularVelocity: 0.32, restitution: 0 },
      },
      {
        position: { x: 18.5, y: 140.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 4.0, height: 0.1, rotation: -30, color: '#872341' },
        props: { density: 1, angularVelocity: -0.32, restitution: 0 },
      },
      {
        position: { x: 4.5, y: 150.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 5.0, height: 0.1, rotation: 60, color: '#503c3c' },
        props: { density: 1, angularVelocity: 0.32, restitution: 0 },
      },
      {
        position: { x: 18.5, y: 150.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 5.0, height: 0.1, rotation: -60, color: '#5c5470' },
        props: { density: 1, angularVelocity: -0.32, restitution: 0 },
      },
      {
        position: { x: 4.5, y: 160.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 4.0, height: 0.1, rotation: 90, color: '#1a3636' },
        props: { density: 1, angularVelocity: 0.32, restitution: 0 },
      },
      {
        position: { x: 18.5, y: 160.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 4.0, height: 0.1, rotation: -90, color: '#522258' },
        props: { density: 1, angularVelocity: -0.32, restitution: 0 },
      },

      {
        position: { x: 3.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 135.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 3.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 140.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 3.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 144.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 3.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 147.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 3.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 149.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 3.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 4.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 5.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 6.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 7.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 8.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 9.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 10.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 11.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 12.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 13.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 14.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 15.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 16.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 17.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 18.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },
      {
        position: { x: 19.5, y: 150.0 },
        type: 'static',
        shape: { type: 'circle', radius: 0.2, color: '#e6e1ae' },
        props: { angularVelocity: 1.0, density: 1, restitution: 1.5, life: 1 },
      },

      {
        position: { x: 4.5, y: 180.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 6.0, height: 0.1, rotation: 0, color: '#ccb1b1' },
        props: { density: 1, angularVelocity: 4.6, restitution: 0 },
      },
      {
        position: { x: 18.5, y: 180.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 7.0, height: 0.1, rotation: 0, color: '#b1ccb1' },
        props: { density: 1, angularVelocity: -4.0, restitution: 0 },
      },

      {
        position: { x: 11.5, y: 195.0 },
        type: 'kinematic',
        shape: { type: 'box', width: 8.0, height: 0.1, rotation: 0, color: '#b3ccff' },
        props: { density: 1, angularVelocity: 5.5, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: The Grinder ==========
  // Features multiple "holding zones" where marbles get trapped and must wait for spinners to release them
  {
    title: 'The Grinder',
    goalY: 240,
    zoomY: 235,
    entities: [
      // Main walls with multiple chambers
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [4, 18],
            [4, 45],
            [8, 50],
            [4, 55],
            [4, 90],
            [8, 95],
            [4, 100],
            [4, 140],
            [8, 145],
            [4, 150],
            [4, 190],
            [8, 195],
            [4, 200],
            [4, 220],
            [4, 245],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [22, 18],
            [22, 45],
            [18, 50],
            [22, 55],
            [22, 90],
            [18, 95],
            [22, 100],
            [22, 140],
            [18, 145],
            [22, 150],
            [22, 190],
            [18, 195],
            [22, 200],
            [22, 220],
            [22, 245],
          ],
        },
      },
      // ===== HOLDING ZONE 1: Entry Funnel with slow gate =====
      // Funnel walls that force marbles into a tight choke
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[6, 20], [11, 35]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[20, 20], [15, 35]] },
      },
      // Very slow gate spinner - creates bottleneck
      {
        position: { x: 13, y: 38 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.8, restitution: 0 },
      },
      // Bumpers that knock leaders back up
      {
        position: { x: 10, y: 42 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ffaa00' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 16, y: 42 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ffaa00' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },

      // ===== HOLDING ZONE 2: The Washing Machine =====
      // Circular chamber with fast spinner that tosses marbles around
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.5 },
        shape: { type: 'polyline', rotation: 0, points: [[6, 55], [6, 85], [8, 88]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.5 },
        shape: { type: 'polyline', rotation: 0, points: [[20, 55], [20, 85], [18, 88]] },
      },
      // Central spinning cross that throws marbles
      {
        position: { x: 13, y: 70 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.2, rotation: 0, color: '#44aaff' },
        props: { density: 1, angularVelocity: 6, restitution: 0.8 },
      },
      {
        position: { x: 13, y: 70 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.2, rotation: 1.57, color: '#44aaff' },
        props: { density: 1, angularVelocity: 6, restitution: 0.8 },
      },
      // Bouncy walls inside the chamber
      {
        position: { x: 7, y: 65 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 19, y: 65 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 7, y: 75 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 19, y: 75 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      // Exit gate - very slow
      {
        position: { x: 13, y: 88 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.6, restitution: 0 },
      },

      // ===== HOLDING ZONE 3: Pinball Trap =====
      // High-bounce bumpers that keep marbles bouncing
      {
        position: { x: 9, y: 105 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 17, y: 105 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 13, y: 115 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#00ffaa' },
        props: { density: 1, angularVelocity: 0, restitution: 5.5 },
      },
      {
        position: { x: 7, y: 120 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#00ff66' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      {
        position: { x: 19, y: 120 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#00ff66' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      {
        position: { x: 13, y: 128 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#00ff44' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      // Tiny exit with slow spinner
      {
        position: { x: 13, y: 138 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.5, restitution: 0 },
      },

      // ===== HOLDING ZONE 4: The Blender =====
      // Multiple fast spinners in sequence
      {
        position: { x: 9, y: 155 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.15, rotation: 0, color: '#aa44ff' },
        props: { density: 1, angularVelocity: 8, restitution: 0.5 },
      },
      {
        position: { x: 17, y: 160 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.15, rotation: 0, color: '#bb44ff' },
        props: { density: 1, angularVelocity: -8, restitution: 0.5 },
      },
      {
        position: { x: 9, y: 165 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.15, rotation: 0, color: '#cc44ff' },
        props: { density: 1, angularVelocity: 8, restitution: 0.5 },
      },
      {
        position: { x: 17, y: 170 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.15, rotation: 0, color: '#dd44ff' },
        props: { density: 1, angularVelocity: -8, restitution: 0.5 },
      },
      {
        position: { x: 9, y: 175 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.15, rotation: 0, color: '#ee44ff' },
        props: { density: 1, angularVelocity: 8, restitution: 0.5 },
      },
      // Final gate
      {
        position: { x: 13, y: 188 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.4, restitution: 0 },
      },

      // ===== FINAL CHAOS ZONE =====
      // Bouncy diamonds
      {
        position: { x: 10, y: 200 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.785, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 16, y: 200 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.785, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 13, y: 208 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff8800' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 218 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -1, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: Catch-Up Canyon ==========
  // Features upward-angled platforms that push leaders back, giving trailers a chance
  {
    title: 'Catch-Up Canyon',
    goalY: 270,
    zoomY: 265,
    entities: [
      // Walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [2, 20],
            [2, 270],
            [2, 275],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [24, 20],
            [24, 270],
            [24, 275],
          ],
        },
      },

      // ===== SECTION 1: Upward Ramps =====
      // Angled platforms that push marbles back up
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.8 },
        shape: { type: 'polyline', rotation: 0, points: [[4, 30], [12, 25]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.8 },
        shape: { type: 'polyline', rotation: 0, points: [[22, 35], [14, 30]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.8 },
        shape: { type: 'polyline', rotation: 0, points: [[4, 45], [12, 40]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.8 },
        shape: { type: 'polyline', rotation: 0, points: [[22, 50], [14, 45]] },
      },
      // Super bouncy center bumper
      {
        position: { x: 13, y: 38 },
        type: 'static',
        shape: { type: 'circle', radius: 1.5, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },

      // ===== SECTION 2: The Elevator Shaft =====
      // Slow upward-pushing spinners
      {
        position: { x: 8, y: 65 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0.3, color: '#44ff44' },
        props: { density: 1, angularVelocity: 3, restitution: 1 },
      },
      {
        position: { x: 18, y: 70 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: -0.3, color: '#44ff44' },
        props: { density: 1, angularVelocity: -3, restitution: 1 },
      },
      {
        position: { x: 8, y: 80 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0.3, color: '#44ff44' },
        props: { density: 1, angularVelocity: 3, restitution: 1 },
      },
      {
        position: { x: 18, y: 85 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: -0.3, color: '#44ff44' },
        props: { density: 1, angularVelocity: -3, restitution: 1 },
      },
      // Mega bouncer at bottom of shaft
      {
        position: { x: 13, y: 95 },
        type: 'static',
        shape: { type: 'circle', radius: 2, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 7 },
      },

      // ===== SECTION 3: Bottleneck Funnel =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[4, 105], [11, 125]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[22, 105], [15, 125]] },
      },
      // Extremely slow gate
      {
        position: { x: 13, y: 128 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.25, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.3, restitution: 0 },
      },

      // ===== SECTION 4: Chaos Chamber =====
      // Many high-bounce bumpers creating unpredictable paths
      {
        position: { x: 7, y: 140 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff66cc' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 13, y: 138 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#cc66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 5.5 },
      },
      {
        position: { x: 19, y: 140 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#66ccff' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 10, y: 150 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#66ffcc' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      {
        position: { x: 16, y: 150 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#ffcc66' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      {
        position: { x: 13, y: 158 },
        type: 'static',
        shape: { type: 'circle', radius: 0.9, color: '#ff6666' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      // Spinning blender in chaos
      {
        position: { x: 13, y: 148 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.15, rotation: 0, color: '#ffffff' },
        props: { density: 1, angularVelocity: 7, restitution: 0.5 },
      },

      // ===== SECTION 5: The Slingshot Zone =====
      // Angled bumpers that fling marbles backwards
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
        shape: { type: 'polyline', rotation: 0, points: [[5, 175], [10, 170]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
        shape: { type: 'polyline', rotation: 0, points: [[21, 180], [16, 175]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
        shape: { type: 'polyline', rotation: 0, points: [[5, 190], [10, 185]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
        shape: { type: 'polyline', rotation: 0, points: [[21, 195], [16, 190]] },
      },

      // ===== SECTION 6: Final Gauntlet =====
      // Slow gates alternating
      {
        position: { x: 10, y: 210 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.5, restitution: 0 },
      },
      {
        position: { x: 16, y: 220 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: -0.5, restitution: 0 },
      },
      {
        position: { x: 10, y: 230 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.5, restitution: 0 },
      },
      // Final bumper
      {
        position: { x: 13, y: 240 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#00ffff' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 248 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -0.8, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: Spiral Prison ==========
  // Long spiraling descent with multiple traps and holding zones
  {
    title: 'Spiral Prison',
    goalY: 300,
    zoomY: 295,
    entities: [
      // Outer walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [0, 25],
            [0, 300],
            [0, 305],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [26, 25],
            [26, 300],
            [26, 305],
          ],
        },
      },

      // ===== SPIRAL LEVEL 1 =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 30], [20, 40]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 50], [6, 60]] },
      },
      // Gate at end of spiral
      {
        position: { x: 5, y: 63 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.4, restitution: 0 },
      },
      // Bumper trap
      {
        position: { x: 15, y: 50 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#00ff00' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },

      // ===== SPIRAL LEVEL 2 =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 70], [20, 80]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 90], [6, 100]] },
      },
      // Spinner chaos
      {
        position: { x: 13, y: 85 },
        type: 'kinematic',
        shape: { type: 'box', width: 8, height: 0.15, rotation: 0, color: '#ffaa00' },
        props: { density: 1, angularVelocity: 5, restitution: 0.8 },
      },
      // Gate
      {
        position: { x: 5, y: 103 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.35, restitution: 0 },
      },

      // ===== SPIRAL LEVEL 3 =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 110], [20, 120]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 130], [6, 140]] },
      },
      // High bounce zone
      {
        position: { x: 10, y: 125 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff00ff' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },
      {
        position: { x: 16, y: 130 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff00ff' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },
      // Gate
      {
        position: { x: 5, y: 143 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.3, restitution: 0 },
      },

      // ===== SPIRAL LEVEL 4 =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 150], [20, 160]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 170], [6, 180]] },
      },
      // Double spinner trap
      {
        position: { x: 10, y: 165 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.15, rotation: 0, color: '#44aaff' },
        props: { density: 1, angularVelocity: 6, restitution: 0.6 },
      },
      {
        position: { x: 16, y: 175 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.15, rotation: 0, color: '#44aaff' },
        props: { density: 1, angularVelocity: -6, restitution: 0.6 },
      },
      // Gate
      {
        position: { x: 5, y: 183 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.25, restitution: 0 },
      },

      // ===== SPIRAL LEVEL 5 =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 190], [20, 200]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 210], [6, 220]] },
      },
      // Mega bounce central
      {
        position: { x: 13, y: 205 },
        type: 'static',
        shape: { type: 'circle', radius: 2, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 7 },
      },
      // Gate
      {
        position: { x: 5, y: 223 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0.2, restitution: 0 },
      },

      // ===== FINAL SPIRAL =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 230], [20, 240]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 250], [6, 260]] },
      },
      // Final chaos bumpers
      {
        position: { x: 8, y: 250 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff6600' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 18, y: 255 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff6600' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      // Slow final gate
      {
        position: { x: 13, y: 268 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.25, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.15, restitution: 0 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 278 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -0.6, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: The Equalizer ==========
  // Designed specifically to let trailing marbles catch up
  {
    title: 'The Equalizer',
    goalY: 320,
    zoomY: 315,
    entities: [
      // Walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [1, 22],
            [1, 320],
            [1, 325],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [25, 22],
            [25, 320],
            [25, 325],
          ],
        },
      },

      // ===== WAITING ROOM 1: The Lobby =====
      // Flat floor where marbles collect
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[3, 40], [11.5, 40]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[14.5, 40], [23, 40]] },
      },
      // Tiny exit with extremely slow gate
      {
        position: { x: 13, y: 42 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.2, restitution: 0 },
      },

      // ===== BOUNCY MAYHEM ZONE =====
      // Super high restitution bumpers causing chaos
      {
        position: { x: 8, y: 55 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#ff00ff' },
        props: { density: 1, angularVelocity: 0, restitution: 7 },
      },
      {
        position: { x: 18, y: 55 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#00ffff' },
        props: { density: 1, angularVelocity: 0, restitution: 7 },
      },
      {
        position: { x: 13, y: 65 },
        type: 'static',
        shape: { type: 'circle', radius: 1.5, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 8 },
      },
      {
        position: { x: 5, y: 70 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff8800' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },
      {
        position: { x: 21, y: 70 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#88ff00' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },

      // ===== WAITING ROOM 2 =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[3, 90], [11, 90]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[15, 90], [23, 90]] },
      },
      {
        position: { x: 13, y: 92 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.18, restitution: 0 },
      },

      // ===== THE BLENDER =====
      // Fast spinning cross in enclosed chamber
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.3 },
        shape: { type: 'polyline', rotation: 0, points: [[5, 100], [5, 140]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.3 },
        shape: { type: 'polyline', rotation: 0, points: [[21, 100], [21, 140]] },
      },
      {
        position: { x: 13, y: 120 },
        type: 'kinematic',
        shape: { type: 'box', width: 7, height: 0.2, rotation: 0, color: '#44ff44' },
        props: { density: 1, angularVelocity: 8, restitution: 0.8 },
      },
      {
        position: { x: 13, y: 120 },
        type: 'kinematic',
        shape: { type: 'box', width: 7, height: 0.2, rotation: 1.57, color: '#44ff44' },
        props: { density: 1, angularVelocity: 8, restitution: 0.8 },
      },
      // Exit gate
      {
        position: { x: 13, y: 142 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.25, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.15, restitution: 0 },
      },

      // ===== SLINGSHOT RAMPS =====
      // Angled high-bounce surfaces that fling marbles back
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
        shape: { type: 'polyline', rotation: 0, points: [[3, 160], [10, 152]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
        shape: { type: 'polyline', rotation: 0, points: [[23, 165], [16, 157]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
        shape: { type: 'polyline', rotation: 0, points: [[3, 180], [10, 172]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
        shape: { type: 'polyline', rotation: 0, points: [[23, 185], [16, 177]] },
      },

      // ===== WAITING ROOM 3 =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[3, 200], [11, 200]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[15, 200], [23, 200]] },
      },
      {
        position: { x: 13, y: 202 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.12, restitution: 0 },
      },

      // ===== CHAOS BUMPER FIELD =====
      {
        position: { x: 6, y: 215 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 13, y: 212 },
        type: 'static',
        shape: { type: 'circle', radius: 0.9, color: '#44ff44' },
        props: { density: 1, angularVelocity: 0, restitution: 5.5 },
      },
      {
        position: { x: 20, y: 215 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#4444ff' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 9, y: 225 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff44ff' },
        props: { density: 1, angularVelocity: 0, restitution: 5.5 },
      },
      {
        position: { x: 17, y: 225 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#44ffff' },
        props: { density: 1, angularVelocity: 0, restitution: 5.5 },
      },
      {
        position: { x: 13, y: 235 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#ffff44' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },

      // ===== WAITING ROOM 4 (Final) =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[3, 255], [11, 255]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[15, 255], [23, 255]] },
      },
      {
        position: { x: 13, y: 257 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.1, restitution: 0 },
      },

      // ===== FINAL DESCENT =====
      // Last chance bumpers
      {
        position: { x: 10, y: 270 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 16, y: 275 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#8800ff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 13, y: 285 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff8800' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      // Goal spinner (very slow)
      {
        position: { x: 13, y: 298 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -0.5, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: Pinball Arena ==========
  // Massive pinball-style with many catch-up mechanics
  {
    title: 'Pinball Arena',
    goalY: 260,
    zoomY: 255,
    entities: [
      // Walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.5 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [2, 20],
            [2, 260],
            [2, 265],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.5 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [24, 20],
            [24, 260],
            [24, 265],
          ],
        },
      },

      // ===== TOP BUMPER CLUSTER =====
      {
        position: { x: 8, y: 25 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#ff3366' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 18, y: 25 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#3366ff' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 13, y: 32 },
        type: 'static',
        shape: { type: 'circle', radius: 1.5, color: '#66ff33' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },
      // Slingshot walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
        shape: { type: 'polyline', rotation: 0, points: [[4, 40], [8, 35]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
        shape: { type: 'polyline', rotation: 0, points: [[22, 40], [18, 35]] },
      },

      // ===== SPINNER TRAP ZONE =====
      {
        position: { x: 8, y: 55 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.15, rotation: 0.5, color: '#ffaa00' },
        props: { density: 1, angularVelocity: 5, restitution: 0.8 },
      },
      {
        position: { x: 18, y: 55 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.15, rotation: -0.5, color: '#ffaa00' },
        props: { density: 1, angularVelocity: -5, restitution: 0.8 },
      },
      // Center mega bumper
      {
        position: { x: 13, y: 60 },
        type: 'static',
        shape: { type: 'circle', radius: 2, color: '#ff00ff' },
        props: { density: 1, angularVelocity: 0, restitution: 7 },
      },

      // ===== NARROW GATE =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[4, 75], [11, 80]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[22, 75], [15, 80]] },
      },
      {
        position: { x: 13, y: 82 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.25, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.25, restitution: 0 },
      },

      // ===== SECOND BUMPER FIELD =====
      {
        position: { x: 6, y: 95 },
        type: 'static',
        shape: { type: 'circle', radius: 0.9, color: '#00ffff' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 13, y: 92 },
        type: 'static',
        shape: { type: 'circle', radius: 1.1, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 5.5 },
      },
      {
        position: { x: 20, y: 95 },
        type: 'static',
        shape: { type: 'circle', radius: 0.9, color: '#ff8800' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 9, y: 105 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#88ff00' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      {
        position: { x: 17, y: 105 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#0088ff' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },

      // ===== FLIPPER SPINNERS =====
      {
        position: { x: 7, y: 120 },
        type: 'kinematic',
        shape: { type: 'box', width: 3.5, height: 0.15, rotation: 0.3 },
        props: { density: 1, angularVelocity: 4, restitution: 0.6 },
      },
      {
        position: { x: 19, y: 120 },
        type: 'kinematic',
        shape: { type: 'box', width: 3.5, height: 0.15, rotation: -0.3 },
        props: { density: 1, angularVelocity: -4, restitution: 0.6 },
      },

      // ===== WAITING AREA =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[4, 135], [11, 135]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[15, 135], [22, 135]] },
      },
      {
        position: { x: 13, y: 137 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.2, restitution: 0 },
      },

      // ===== DIAMOND BUMPER FIELD =====
      {
        position: { x: 8, y: 150 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.6, rotation: 0.785, color: '#ffcc00' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 13, y: 148 },
        type: 'static',
        shape: { type: 'box', width: 0.7, height: 0.7, rotation: 0.785, color: '#ff6600' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      {
        position: { x: 18, y: 150 },
        type: 'static',
        shape: { type: 'box', width: 0.6, height: 0.6, rotation: 0.785, color: '#ffcc00' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 10, y: 160 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.785, color: '#ff3300' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 16, y: 160 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.785, color: '#ff3300' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },

      // ===== BLENDER TRAP =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.3 },
        shape: { type: 'polyline', rotation: 0, points: [[6, 170], [6, 200]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.3 },
        shape: { type: 'polyline', rotation: 0, points: [[20, 170], [20, 200]] },
      },
      // Fast spinning cross
      {
        position: { x: 13, y: 185 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.18, rotation: 0, color: '#44aaff' },
        props: { density: 1, angularVelocity: 7, restitution: 0.7 },
      },
      {
        position: { x: 13, y: 185 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.18, rotation: 1.57, color: '#44aaff' },
        props: { density: 1, angularVelocity: 7, restitution: 0.7 },
      },
      // Exit
      {
        position: { x: 13, y: 202 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.25, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.18, restitution: 0 },
      },

      // ===== FINAL BUMPER RUN =====
      {
        position: { x: 8, y: 215 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff4466' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 13, y: 220 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#44ff66' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 18, y: 215 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#6644ff' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 10, y: 228 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff6644' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 16, y: 228 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#66ff44' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 238 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -0.7, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: The Gauntlet Supreme ==========
  // Ultimate challenge with every catch-up mechanic
  {
    title: 'Gauntlet Supreme',
    goalY: 340,
    zoomY: 335,
    entities: [
      // Walls with many indentations
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [0, 22],
            [0, 60],
            [4, 65],
            [0, 70],
            [0, 120],
            [4, 125],
            [0, 130],
            [0, 180],
            [4, 185],
            [0, 190],
            [0, 240],
            [4, 245],
            [0, 250],
            [0, 340],
            [0, 345],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [26, 22],
            [26, 60],
            [22, 65],
            [26, 70],
            [26, 120],
            [22, 125],
            [26, 130],
            [26, 180],
            [22, 185],
            [26, 190],
            [26, 240],
            [22, 245],
            [26, 250],
            [26, 340],
            [26, 345],
          ],
        },
      },

      // ===== STAGE 1: Funnel Trap =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[3, 25], [11, 40]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[23, 25], [15, 40]] },
      },
      {
        position: { x: 13, y: 43 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.15, restitution: 0 },
      },
      // Chaos bumpers above funnel
      {
        position: { x: 8, y: 32 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff6600' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      {
        position: { x: 18, y: 32 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff6600' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },

      // ===== STAGE 2: Spinner Gauntlet =====
      {
        position: { x: 8, y: 55 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.15, rotation: 0, color: '#44ff44' },
        props: { density: 1, angularVelocity: 6, restitution: 0.7 },
      },
      {
        position: { x: 18, y: 58 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.15, rotation: 0, color: '#44ff44' },
        props: { density: 1, angularVelocity: -6, restitution: 0.7 },
      },

      // ===== STAGE 3: Mega Bounce Chamber =====
      {
        position: { x: 6, y: 80 },
        type: 'static',
        shape: { type: 'circle', radius: 1.3, color: '#ff00ff' },
        props: { density: 1, angularVelocity: 0, restitution: 7 },
      },
      {
        position: { x: 20, y: 80 },
        type: 'static',
        shape: { type: 'circle', radius: 1.3, color: '#00ffff' },
        props: { density: 1, angularVelocity: 0, restitution: 7 },
      },
      {
        position: { x: 13, y: 90 },
        type: 'static',
        shape: { type: 'circle', radius: 1.8, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 8 },
      },
      {
        position: { x: 8, y: 100 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#ff8800' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },
      {
        position: { x: 18, y: 100 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#88ff00' },
        props: { density: 1, angularVelocity: 0, restitution: 6 },
      },
      // Exit gate
      {
        position: { x: 13, y: 115 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.12, restitution: 0 },
      },

      // ===== STAGE 4: The Blender =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.4 },
        shape: { type: 'polyline', rotation: 0, points: [[4, 125], [4, 170]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.4 },
        shape: { type: 'polyline', rotation: 0, points: [[22, 125], [22, 170]] },
      },
      // Double cross spinner
      {
        position: { x: 13, y: 145 },
        type: 'kinematic',
        shape: { type: 'box', width: 8, height: 0.2, rotation: 0, color: '#aa44ff' },
        props: { density: 1, angularVelocity: 9, restitution: 0.8 },
      },
      {
        position: { x: 13, y: 145 },
        type: 'kinematic',
        shape: { type: 'box', width: 8, height: 0.2, rotation: 1.57, color: '#aa44ff' },
        props: { density: 1, angularVelocity: 9, restitution: 0.8 },
      },
      // Exit
      {
        position: { x: 13, y: 172 },
        type: 'kinematic',
        shape: { type: 'box', width: 3.5, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.1, restitution: 0 },
      },

      // ===== STAGE 5: Slingshot Canyon =====
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 195], [10, 185]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 200], [16, 190]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 215], [10, 205]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
        shape: { type: 'polyline', rotation: 0, points: [[24, 220], [16, 210]] },
      },
      // Waiting area
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[2, 235], [11, 235]] },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'polyline', rotation: 0, points: [[15, 235], [24, 235]] },
      },
      {
        position: { x: 13, y: 237 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.3, rotation: 0, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0.08, restitution: 0 },
      },

      // ===== STAGE 6: Final Chaos =====
      // Many small bumpers
      {
        position: { x: 6, y: 255 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 13, y: 252 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#44ff44' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      {
        position: { x: 20, y: 255 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#4444ff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 9, y: 265 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff44ff' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 17, y: 265 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#44ffff' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 13, y: 275 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ffff44' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      // Spinner pair
      {
        position: { x: 8, y: 285 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.12, rotation: 0, color: '#ffffff' },
        props: { density: 1, angularVelocity: 3, restitution: 0.4 },
      },
      {
        position: { x: 18, y: 290 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.12, rotation: 0, color: '#ffffff' },
        props: { density: 1, angularVelocity: -3, restitution: 0.4 },
      },
      // Final bumpers
      {
        position: { x: 10, y: 300 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      {
        position: { x: 16, y: 305 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#8800ff' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      // Goal spinner (very slow)
      {
        position: { x: 13, y: 318 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -0.4, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: The Gauntlet ==========
  {
    title: 'The Gauntlet',
    goalY: 160,
    zoomY: 155,
    entities: [
      // Walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [4, 18],
            [4, 160],
            [12.875, 165],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [22, 18],
            [22, 160],
            [12.875, 165],
          ],
        },
      },
      // Section 1: Narrow squeeze with spikes
      {
        type: 'static',
        position: { x: 8, y: 25 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'box', width: 0.3, height: 0.3, rotation: 0.785, color: '#ff4444' },
      },
      {
        type: 'static',
        position: { x: 18, y: 25 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'box', width: 0.3, height: 0.3, rotation: 0.785, color: '#ff4444' },
      },
      {
        type: 'static',
        position: { x: 7, y: 30 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'box', width: 0.3, height: 0.3, rotation: 0.785, color: '#ff4444' },
      },
      {
        type: 'static',
        position: { x: 19, y: 30 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: { type: 'box', width: 0.3, height: 0.3, rotation: 0.785, color: '#ff4444' },
      },
      // Section 2: Crushing pistons (fast spinners)
      {
        position: { x: 8, y: 45 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0, color: '#888888' },
        props: { density: 1, angularVelocity: 8, restitution: 0.5 },
      },
      {
        position: { x: 18, y: 45 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0, color: '#888888' },
        props: { density: 1, angularVelocity: -8, restitution: 0.5 },
      },
      {
        position: { x: 13, y: 55 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0, color: '#666666' },
        props: { density: 1, angularVelocity: 10, restitution: 0.5 },
      },
      // Section 3: Bouncy chaos zone
      {
        position: { x: 8, y: 70 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 11, y: 68 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 15, y: 68 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 18, y: 70 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#00ff88' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 10, y: 75 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#00cc66' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 16, y: 75 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#00cc66' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 13, y: 80 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#009944' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      // Section 4: Zigzag ramps
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [6, 90],
            [13, 95],
            [6, 100],
            [13, 105],
            [6, 110],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [20, 90],
            [13, 95],
            [20, 100],
            [13, 105],
            [20, 110],
          ],
        },
      },
      // Section 5: Final spinner gauntlet
      {
        position: { x: 9, y: 120 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.12, rotation: 0, color: '#ff8800' },
        props: { density: 1, angularVelocity: 6, restitution: 0.3 },
      },
      {
        position: { x: 17, y: 125 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.12, rotation: 0, color: '#ff6600' },
        props: { density: 1, angularVelocity: -6, restitution: 0.3 },
      },
      {
        position: { x: 9, y: 130 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.12, rotation: 0, color: '#ff4400' },
        props: { density: 1, angularVelocity: 6, restitution: 0.3 },
      },
      {
        position: { x: 17, y: 135 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.12, rotation: 0, color: '#ff2200' },
        props: { density: 1, angularVelocity: -6, restitution: 0.3 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 155 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -1.5, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: Spiral Galaxy ==========
  {
    title: 'Spiral Galaxy',
    goalY: 145,
    zoomY: 140,
    entities: [
      // Outer walls forming a wide spiral funnel
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 8],
            [2, 20],
            [2, 50],
            [5, 70],
            [3, 90],
            [6, 110],
            [4, 130],
            [12.875, 150],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 8],
            [24, 20],
            [24, 50],
            [21, 70],
            [23, 90],
            [20, 110],
            [22, 130],
            [12.875, 150],
          ],
        },
      },
      // Central spinning stars (multi-arm spinners)
      {
        position: { x: 13, y: 30 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.1, rotation: 0, color: '#ffdd00' },
        props: { density: 1, angularVelocity: 3, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 30 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.1, rotation: 1.57, color: '#ffdd00' },
        props: { density: 1, angularVelocity: 3, restitution: 0.2 },
      },
      // Nebula bumpers (glowing circles)
      {
        position: { x: 7, y: 40 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#ff66cc' },
        props: { density: 1, angularVelocity: 0, restitution: 1.8 },
      },
      {
        position: { x: 19, y: 40 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#66ccff' },
        props: { density: 1, angularVelocity: 0, restitution: 1.8 },
      },
      // Second star
      {
        position: { x: 13, y: 55 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.12, rotation: 0, color: '#ffaa00' },
        props: { density: 1, angularVelocity: -4, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 55 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.12, rotation: 1.047, color: '#ffaa00' },
        props: { density: 1, angularVelocity: -4, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 55 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.12, rotation: 2.094, color: '#ffaa00' },
        props: { density: 1, angularVelocity: -4, restitution: 0.2 },
      },
      // More nebula bumpers
      {
        position: { x: 5, y: 75 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#aa66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 2 },
      },
      {
        position: { x: 21, y: 75 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#66ffaa' },
        props: { density: 1, angularVelocity: 0, restitution: 2 },
      },
      {
        position: { x: 13, y: 80 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#ffffff' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      // Third star (4 arms)
      {
        position: { x: 13, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.12, rotation: 0, color: '#ff6600' },
        props: { density: 1, angularVelocity: 5, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.12, rotation: 0.785, color: '#ff6600' },
        props: { density: 1, angularVelocity: 5, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.12, rotation: 1.57, color: '#ff6600' },
        props: { density: 1, angularVelocity: 5, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 6, height: 0.12, rotation: 2.356, color: '#ff6600' },
        props: { density: 1, angularVelocity: 5, restitution: 0.2 },
      },
      // Final approach bumpers
      {
        position: { x: 8, y: 120 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff4400' },
        props: { density: 1, angularVelocity: 0, restitution: 1.5 },
      },
      {
        position: { x: 18, y: 120 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff4400' },
        props: { density: 1, angularVelocity: 0, restitution: 1.5 },
      },
      {
        position: { x: 13, y: 130 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0, restitution: 2 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 140 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -2, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: Bouncy Castle ==========
  {
    title: 'Bouncy Castle',
    goalY: 120,
    zoomY: 115,
    entities: [
      // Castle walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.8 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [5, 15],
            [5, 120],
            [12.875, 125],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0.8 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [21, 15],
            [21, 120],
            [12.875, 125],
          ],
        },
      },
      // Top bouncy bumper cluster
      {
        position: { x: 9, y: 22 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#ff99cc' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 17, y: 22 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#99ccff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      {
        position: { x: 13, y: 28 },
        type: 'static',
        shape: { type: 'circle', radius: 1.2, color: '#99ffcc' },
        props: { density: 1, angularVelocity: 0, restitution: 4.5 },
      },
      // Second row
      {
        position: { x: 7, y: 40 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ffcc99' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 11, y: 38 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#ccff99' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 15, y: 38 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#cc99ff' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 19, y: 40 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff99ff' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      // Center mega bouncer
      {
        position: { x: 13, y: 55 },
        type: 'static',
        shape: { type: 'circle', radius: 2, color: '#ffff00' },
        props: { density: 1, angularVelocity: 0, restitution: 5 },
      },
      // Third row around the mega
      {
        position: { x: 7, y: 55 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff6666' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 19, y: 55 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#6666ff' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      // Fourth row
      {
        position: { x: 9, y: 72 },
        type: 'static',
        shape: { type: 'circle', radius: 0.9, color: '#66ff66' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 17, y: 72 },
        type: 'static',
        shape: { type: 'circle', radius: 0.9, color: '#ff66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 13, y: 78 },
        type: 'static',
        shape: { type: 'circle', radius: 1, color: '#66ffff' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      // Fifth row
      {
        position: { x: 7, y: 90 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#ffaa66' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 13, y: 92 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#66aaff' },
        props: { density: 1, angularVelocity: 0, restitution: 3.5 },
      },
      {
        position: { x: 19, y: 90 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#aa66ff' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      // Final bouncy trio
      {
        position: { x: 10, y: 105 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff4444' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      {
        position: { x: 16, y: 105 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#44ff44' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      {
        position: { x: 13, y: 110 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#4444ff' },
        props: { density: 1, angularVelocity: 0, restitution: 2 },
      },
      // Gentle goal spinner
      {
        position: { x: 13, y: 118 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -1, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: The Maze ==========
  {
    title: 'The Maze',
    goalY: 135,
    zoomY: 130,
    entities: [
      // Outer walls
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 10],
            [4, 15],
            [4, 135],
            [12.875, 140],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 10],
            [22, 15],
            [22, 135],
            [12.875, 140],
          ],
        },
      },
      // Maze walls - Row 1
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[7, 20], [15, 20]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[18, 20], [22, 20]],
        },
      },
      // Row 2
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[4, 28], [10, 28]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[13, 28], [19, 28]],
        },
      },
      // Row 3
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[8, 36], [16, 36]],
        },
      },
      // Row 4
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[4, 44], [12, 44]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[15, 44], [22, 44]],
        },
      },
      // Row 5
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[6, 52], [11, 52]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[14, 52], [20, 52]],
        },
      },
      // Row 6
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[4, 60], [9, 60]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[12, 60], [22, 60]],
        },
      },
      // Row 7
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[7, 68], [17, 68]],
        },
      },
      // Row 8
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[4, 76], [10, 76]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[13, 76], [18, 76]],
        },
      },
      // Row 9
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[8, 84], [14, 84]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[17, 84], [22, 84]],
        },
      },
      // Row 10
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[4, 92], [11, 92]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[14, 92], [19, 92]],
        },
      },
      // Row 11
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[6, 100], [15, 100]],
        },
      },
      // Row 12
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[4, 108], [9, 108]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[12, 108], [22, 108]],
        },
      },
      // Row 13
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[7, 116], [13, 116]],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [[16, 116], [20, 116]],
        },
      },
      // Gentle spinners to add chaos
      {
        position: { x: 13, y: 40 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#88aaff' },
        props: { density: 1, angularVelocity: 2, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 72 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#ffaa88' },
        props: { density: 1, angularVelocity: -2, restitution: 0.2 },
      },
      {
        position: { x: 13, y: 104 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.1, rotation: 0, color: '#88ffaa' },
        props: { density: 1, angularVelocity: 2, restitution: 0.2 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 130 },
        type: 'kinematic',
        shape: { type: 'box', width: 5, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -1.2, restitution: 0 },
      },
    ],
  },
  // ========== NEW MAP: Volcano Rush ==========
  {
    title: 'Volcano Rush',
    goalY: 150,
    zoomY: 145,
    entities: [
      // Volcanic crater walls (narrowing then widening)
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [9.25, -300],
            [9.25, 8],
            [3, 20],
            [6, 50],
            [3, 80],
            [7, 110],
            [4, 140],
            [12.875, 155],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 8],
            [23, 20],
            [20, 50],
            [23, 80],
            [19, 110],
            [22, 140],
            [12.875, 155],
          ],
        },
      },
      // Lava bumpers (high bounce, red/orange colors)
      {
        position: { x: 8, y: 25 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff2200' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      {
        position: { x: 18, y: 25 },
        type: 'static',
        shape: { type: 'circle', radius: 0.6, color: '#ff4400' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      {
        position: { x: 13, y: 30 },
        type: 'static',
        shape: { type: 'circle', radius: 0.8, color: '#ff6600' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      // Spinning lava rocks
      {
        position: { x: 10, y: 40 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.15, rotation: 0, color: '#aa3300' },
        props: { density: 1, angularVelocity: 4, restitution: 0.5 },
      },
      {
        position: { x: 16, y: 45 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.15, rotation: 0, color: '#cc4400' },
        props: { density: 1, angularVelocity: -4, restitution: 0.5 },
      },
      // Second lava zone
      {
        position: { x: 6, y: 60 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#ff3300' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      {
        position: { x: 13, y: 58 },
        type: 'static',
        shape: { type: 'circle', radius: 0.9, color: '#ff5500' },
        props: { density: 1, angularVelocity: 0, restitution: 3 },
      },
      {
        position: { x: 20, y: 60 },
        type: 'static',
        shape: { type: 'circle', radius: 0.7, color: '#ff3300' },
        props: { density: 1, angularVelocity: 0, restitution: 2.5 },
      },
      // More spinning rocks
      {
        position: { x: 8, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.15, rotation: 0, color: '#bb4400' },
        props: { density: 1, angularVelocity: -5, restitution: 0.5 },
      },
      {
        position: { x: 18, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.15, rotation: 0, color: '#dd5500' },
        props: { density: 1, angularVelocity: 5, restitution: 0.5 },
      },
      // Central eruption zone
      {
        position: { x: 13, y: 90 },
        type: 'static',
        shape: { type: 'circle', radius: 1.5, color: '#ff0000' },
        props: { density: 1, angularVelocity: 0, restitution: 4 },
      },
      // Fast spinning cross
      {
        position: { x: 13, y: 90 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.12, rotation: 0, color: '#ffaa00' },
        props: { density: 1, angularVelocity: 8, restitution: 0.3 },
      },
      {
        position: { x: 13, y: 90 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.12, rotation: 1.57, color: '#ffaa00' },
        props: { density: 1, angularVelocity: 8, restitution: 0.3 },
      },
      // Lower bumpers
      {
        position: { x: 9, y: 110 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff4400' },
        props: { density: 1, angularVelocity: 0, restitution: 2 },
      },
      {
        position: { x: 17, y: 110 },
        type: 'static',
        shape: { type: 'circle', radius: 0.5, color: '#ff4400' },
        props: { density: 1, angularVelocity: 0, restitution: 2 },
      },
      // Final spinning descent
      {
        position: { x: 10, y: 125 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.12, rotation: 0, color: '#882200' },
        props: { density: 1, angularVelocity: 3, restitution: 0.3 },
      },
      {
        position: { x: 16, y: 130 },
        type: 'kinematic',
        shape: { type: 'box', width: 2.5, height: 0.12, rotation: 0, color: '#993300' },
        props: { density: 1, angularVelocity: -3, restitution: 0.3 },
      },
      {
        position: { x: 13, y: 140 },
        type: 'static',
        shape: { type: 'circle', radius: 0.4, color: '#ffcc00' },
        props: { density: 1, angularVelocity: 0, restitution: 1.5 },
      },
      // Goal spinner
      {
        position: { x: 13, y: 148 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.1, rotation: 0 },
        props: { density: 1, angularVelocity: -1.5, restitution: 0 },
      },
    ],
  },
];
