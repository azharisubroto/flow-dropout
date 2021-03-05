/**
 * Breadth-first Search method
 *
 * @param {Object} treedata - treedata object
 * @param {Object} root - the root of node items
 * @param {String} keyword - keyword
 */
export const BreadthFirstSearch = (treedata, root, keyword) => {
  // make a queue array
  let queue = []
  // populate it with the node that will be the root of your search
  queue.push(root)

  // search the queue until it is empty
  while (queue.length > 0) {
    // assign the top of the queue to variable currentNode
    let currentNode = queue[0]
    console.log(currentNode)

    // if currentNode is the node we're searching for, break & alert
    if (currentNode === keyword) {
      console.log('Found it!')
      return
    }

    // if currentNode has a left child node, add it to the queue.
    // if (currentNode.left !== null) {
    //   queue.push(treedata[currentNode.left])
    // }

    // // if currentNode has a right child node, add it to the queue.
    // if (currentNode.right !== null) {
    //   queue.push(treedata[currentNode.right])
    // }
    // remove the currentNode from the queue.
    queue.shift()
  }
  console.log('Sorry, no such node found :(')
}
