class Node {
  constructor (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  constructor () {
    this.root = null
  }

  insert (data) {
    const node = new Node(data, null, null)
    if (this.root === null) {
      this.root = node
    } else {
      let current = this.root
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node
            break
          } else {
            current = current.left
          }
        } else {
          if (current.right === null) {
            current.right = node
            break
          } else {
            current = current.right
          }
        }
      }
    }
  }

  getMax () {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  getMin () {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  // 获取给定的节点
  findNode (data) {
    let current = this.root
    while (current) {
      if (current.data === data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }

  // 获取给定节点下二叉树的最小值
  getSmallLest (node) {
    while (node.left !== null) {
      node = node.left
    }
    return node
  }

  // 根据给定删除给定节点下的二叉树对应节点
  removeNode (node, data) {
    if (node === null) {
      return null
    }
    if (node.data === data) {
      // 没有子节点 (子树)
      if (node.left === null && node.right === null) {
        return null
      }
      // 只有右子节点
      else if (node.left === null) {
        return node.right
      }
      // 只有左子节点
      else if (node.right === null) {
        return node.left
      }
      // 有两个子节点
      else {
        let tempNode = this.getSmallLest(node.right)
        node.data = tempNode.data
        node.right = this.removeNode(node.right, tempNode.data)
        return node
      }
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }
}
const bst = new BinaryTree()
bst.insert(19)
bst.insert(15)
bst.insert(20)
bst.insert(25)
bst.insert(12)
bst.insert(10)
bst.insert(24)
bst.insert(28)
bst.insert(16)
console.log(bst.getMax())
console.log(bst.getSmallLest(bst.findNode(20)))
