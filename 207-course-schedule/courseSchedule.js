/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const canFinish = (numCourses, prerequisites) => {
  const graph = buildGraph(prerequisites);
  const visited = new Set();
  const visiting = new Set();

  const scheduler = (course) => {
    visiting.add(course);
    const preReq = graph.get(course);
    if (preReq.length) {
      for (let preReqCourse of preReq) {
        // if already visited do nothing
        if (visited.has(preReqCourse)) {
          continue;
        }
        // if preReq is in visiting, that means it will be cyclical. Return false
        if (visiting.has(preReqCourse)) {
          return false;
        }

        // recursive case - if preReq is false, it is impossible. return false
        if (!scheduler(preReqCourse)) return false;
      }
    }
    // at this point add the current course and delete from visiting. Must be true
    visiting.delete(course);
    visited.add(course);
    return true;
  }

  for ([course, preReq] of graph) {
    // if false, it is not possible
    if (!scheduler(course)) return false;
  }
  return true;
};

// Graph { course: [prerequisites] }
const buildGraph = (edges) => {
  const graph = new Map();
  for (edge of edges) {
    const [a , b] = edge;
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
  }
  return graph;
}

let numCourses, prerequisites;

// Test #1
numCourses = 2; prerequisites = [[1, 0]];
const result1 = canFinish(numCourses, prerequisites);
console.log(result1);

// Test #2
numCourses = 2, prerequisites = [[1,0],[0,1]];
const result2 = canFinish(numCourses, prerequisites);
console.log(result2);

// Test #3
numCourses = 3, prerequisites = [[2,1],[1,0]];
const result3 = canFinish(numCourses, prerequisites);
console.log(result3);