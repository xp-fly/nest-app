import { MultiShape } from './multi-shape';

const points: Array<{x: number, y: number}> = [];

const shape = new MultiShape(points.shift(), points.pop());

for (const item of points) {
  shape.add(item, (head, tail, node) => {
    const slope = (tail.value.y - head.value.y) / (tail.value.x - head.value.x);
    const currPointSlope = (node.value.y - head.value.y) / (node.value.x - node.value.x);
    return slope > currPointSlope;
  });
}

const arr = shape.toArray();
