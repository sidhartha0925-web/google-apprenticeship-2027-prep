(() => {
  "use strict";

  const STORAGE_KEY = "sidhartha-google-apprenticeship-2027-v1";
  const problemUrl = (slug) => `https://leetcode.com/problems/${slug}/`;
  const leetcodeSolutionUrl = (slug) => `https://leetcode.com/problems/${slug}/solutions/`;
  const MODULE_ORDER = [
    "Foundations & Sorting", "Arrays & Hashing", "Strings & Sliding Window", "Binary Search",
    "Recursion & Backtracking", "Linked Lists", "Bit Manipulation", "Greedy & Intervals",
    "Stacks & Queues", "Trees & Tries", "Graphs & Heaps", "Dynamic Programming", "Tries & Advanced Strings"
  ];
  const moduleFromTopic = (topic) => ({
    "Arrays & Hashing": "Arrays & Hashing",
    Arrays: "Arrays & Hashing",
    Matrices: "Arrays & Hashing",
    Strings: "Strings & Sliding Window",
    "Sliding Window": "Strings & Sliding Window",
    "Two Pointers": "Strings & Sliding Window",
    "Binary Search": "Binary Search",
    "Stack & Queue": "Stacks & Queues",
    "Linked List": "Linked Lists",
    "Trees & BST": "Trees & Tries",
    Tries: "Trees & Tries",
    Graphs: "Graphs & Heaps",
    Heap: "Graphs & Heaps",
    Intervals: "Greedy & Intervals",
    Backtracking: "Recursion & Backtracking",
    "Dynamic Programming": "Dynamic Programming"
  }[topic] || topic);
  const makeQuestion = (id, title, slug, topic, difficulty, priority, pattern, week) => ({
    id, title, url: problemUrl(slug), solutionUrl: leetcodeSolutionUrl(slug), topic, difficulty, priority, pattern, week,
    collection: "Core 90", module: moduleFromTopic(topic)
  });

  const coreQuestions = [
    makeQuestion("q01", "Two Sum", "two-sum", "Arrays & Hashing", "Easy", "Now", "Hash map complement lookup", 1),
    makeQuestion("q02", "Contains Duplicate", "contains-duplicate", "Arrays & Hashing", "Easy", "Now", "Set membership", 1),
    makeQuestion("q03", "Valid Anagram", "valid-anagram", "Arrays & Hashing", "Easy", "Now", "Frequency counting", 1),
    makeQuestion("q04", "Majority Element", "majority-element", "Arrays & Hashing", "Easy", "Now", "Boyer–Moore voting", 1),
    makeQuestion("q05", "Best Time to Buy and Sell Stock", "best-time-to-buy-and-sell-stock", "Arrays", "Easy", "Now", "Running minimum", 1),
    makeQuestion("q06", "Maximum Subarray", "maximum-subarray", "Arrays", "Medium", "Now", "Kadane's algorithm", 1),
    makeQuestion("q07", "Move Zeroes", "move-zeroes", "Arrays", "Easy", "Now", "Stable two pointers", 1),
    makeQuestion("q08", "Product of Array Except Self", "product-of-array-except-self", "Arrays", "Medium", "Now", "Prefix and suffix products", 1),
    makeQuestion("q09", "Longest Consecutive Sequence", "longest-consecutive-sequence", "Arrays & Hashing", "Medium", "Now", "Sequence starts in a set", 1),
    makeQuestion("q10", "Subarray Sum Equals K", "subarray-sum-equals-k", "Arrays & Hashing", "Medium", "Now", "Prefix sum plus frequency map", 1),
    makeQuestion("q11", "Top K Frequent Elements", "top-k-frequent-elements", "Arrays & Hashing", "Medium", "Now", "Frequency buckets", 1),
    makeQuestion("q12", "Group Anagrams", "group-anagrams", "Arrays & Hashing", "Medium", "Now", "Canonical string signature", 1),
    makeQuestion("q13", "Merge Sorted Array", "merge-sorted-array", "Arrays", "Easy", "Now", "Reverse two pointers", 1),
    makeQuestion("q14", "Rotate Array", "rotate-array", "Arrays", "Medium", "Now", "Three reversals", 1),
    makeQuestion("q15", "Set Matrix Zeroes", "set-matrix-zeroes", "Matrices", "Medium", "Now", "First row and column markers", 1),

    makeQuestion("q16", "Valid Palindrome", "valid-palindrome", "Strings", "Easy", "Core", "Two pointers with filtering", 2),
    makeQuestion("q17", "Longest Common Prefix", "longest-common-prefix", "Strings", "Easy", "Core", "Vertical comparison", 2),
    makeQuestion("q18", "Longest Substring Without Repeating Characters", "longest-substring-without-repeating-characters", "Sliding Window", "Medium", "Core", "Last-seen index window", 2),
    makeQuestion("q19", "Longest Repeating Character Replacement", "longest-repeating-character-replacement", "Sliding Window", "Medium", "Core", "Window invariant", 2),
    makeQuestion("q20", "Permutation in String", "permutation-in-string", "Sliding Window", "Medium", "Core", "Fixed-size frequency window", 2),
    makeQuestion("q21", "Find All Anagrams in a String", "find-all-anagrams-in-a-string", "Sliding Window", "Medium", "Core", "Window frequency match", 2),
    makeQuestion("q22", "Minimum Window Substring", "minimum-window-substring", "Sliding Window", "Hard", "Stretch", "Expand and contract with counts", 2),
    makeQuestion("q23", "String Compression", "string-compression", "Strings", "Medium", "Core", "Read and write pointers", 2),
    makeQuestion("q24", "Two Sum II", "two-sum-ii-input-array-is-sorted", "Two Pointers", "Medium", "Core", "Opposing pointers", 2),
    makeQuestion("q25", "3Sum", "3sum", "Two Pointers", "Medium", "Core", "Sort plus two pointers", 2),
    makeQuestion("q26", "Container With Most Water", "container-with-most-water", "Two Pointers", "Medium", "Core", "Move the limiting side", 2),
    makeQuestion("q27", "Trapping Rain Water", "trapping-rain-water", "Two Pointers", "Hard", "Stretch", "Two-sided maximums", 2),
    makeQuestion("q28", "Backspace String Compare", "backspace-string-compare", "Two Pointers", "Easy", "Core", "Reverse scan with skips", 2),
    makeQuestion("q29", "Isomorphic Strings", "isomorphic-strings", "Strings", "Easy", "Core", "Bidirectional mapping", 2),
    makeQuestion("q30", "Palindromic Substrings", "palindromic-substrings", "Strings", "Medium", "Core", "Expand around centers", 2),

    makeQuestion("q31", "Binary Search", "binary-search", "Binary Search", "Easy", "Core", "Closed search interval", 3),
    makeQuestion("q32", "Search in Rotated Sorted Array", "search-in-rotated-sorted-array", "Binary Search", "Medium", "Core", "Identify the sorted half", 3),
    makeQuestion("q33", "Find Minimum in Rotated Sorted Array", "find-minimum-in-rotated-sorted-array", "Binary Search", "Medium", "Core", "Compare with right boundary", 3),
    makeQuestion("q34", "Koko Eating Bananas", "koko-eating-bananas", "Binary Search", "Medium", "Core", "Binary search on the answer", 3),
    makeQuestion("q35", "Search a 2D Matrix", "search-a-2d-matrix", "Binary Search", "Medium", "Core", "Flattened index search", 3),
    makeQuestion("q36", "Valid Parentheses", "valid-parentheses", "Stack & Queue", "Easy", "Core", "Matching stack", 3),
    makeQuestion("q37", "Min Stack", "min-stack", "Stack & Queue", "Medium", "Core", "Store running minimum", 3),
    makeQuestion("q38", "Daily Temperatures", "daily-temperatures", "Stack & Queue", "Medium", "Core", "Monotonic decreasing stack", 3),
    makeQuestion("q39", "Evaluate Reverse Polish Notation", "evaluate-reverse-polish-notation", "Stack & Queue", "Medium", "Core", "Operand stack", 3),
    makeQuestion("q40", "Reverse Linked List", "reverse-linked-list", "Linked List", "Easy", "Core", "Iterative pointer reversal", 3),
    makeQuestion("q41", "Merge Two Sorted Lists", "merge-two-sorted-lists", "Linked List", "Easy", "Core", "Dummy head merge", 3),
    makeQuestion("q42", "Linked List Cycle", "linked-list-cycle", "Linked List", "Easy", "Core", "Fast and slow pointers", 3),
    makeQuestion("q43", "Remove Nth Node From End", "remove-nth-node-from-end-of-list", "Linked List", "Medium", "Core", "Fixed pointer gap", 3),
    makeQuestion("q44", "Reorder List", "reorder-list", "Linked List", "Medium", "Core", "Split, reverse, merge", 3),
    makeQuestion("q45", "LRU Cache", "lru-cache", "Linked List", "Medium", "Stretch", "Hash map plus doubly linked list", 3),

    makeQuestion("q46", "Invert Binary Tree", "invert-binary-tree", "Trees & BST", "Easy", "Core", "Recursive subtree swap", 4),
    makeQuestion("q47", "Maximum Depth of Binary Tree", "maximum-depth-of-binary-tree", "Trees & BST", "Easy", "Core", "Postorder height", 4),
    makeQuestion("q48", "Diameter of Binary Tree", "diameter-of-binary-tree", "Trees & BST", "Easy", "Core", "Height with global answer", 4),
    makeQuestion("q49", "Balanced Binary Tree", "balanced-binary-tree", "Trees & BST", "Easy", "Core", "Early-return height", 4),
    makeQuestion("q50", "Same Tree", "same-tree", "Trees & BST", "Easy", "Core", "Paired recursion", 4),
    makeQuestion("q51", "Subtree of Another Tree", "subtree-of-another-tree", "Trees & BST", "Easy", "Core", "Traverse plus tree equality", 4),
    makeQuestion("q52", "Binary Tree Level Order Traversal", "binary-tree-level-order-traversal", "Trees & BST", "Medium", "Core", "Breadth-first levels", 4),
    makeQuestion("q53", "Binary Tree Right Side View", "binary-tree-right-side-view", "Trees & BST", "Medium", "Core", "Level boundary", 4),
    makeQuestion("q54", "Validate Binary Search Tree", "validate-binary-search-tree", "Trees & BST", "Medium", "Core", "Range constraints", 4),
    makeQuestion("q55", "Lowest Common Ancestor of a BST", "lowest-common-ancestor-of-a-binary-search-tree", "Trees & BST", "Medium", "Core", "Use ordering to descend", 4),
    makeQuestion("q56", "Kth Smallest Element in a BST", "kth-smallest-element-in-a-bst", "Trees & BST", "Medium", "Core", "Inorder traversal", 4),
    makeQuestion("q57", "Construct Tree from Preorder and Inorder", "construct-binary-tree-from-preorder-and-inorder-traversal", "Trees & BST", "Medium", "Core", "Root index partition", 4),
    makeQuestion("q58", "Binary Tree Maximum Path Sum", "binary-tree-maximum-path-sum", "Trees & BST", "Hard", "Stretch", "Downward gain plus global path", 4),
    makeQuestion("q59", "Serialize and Deserialize Binary Tree", "serialize-and-deserialize-binary-tree", "Trees & BST", "Hard", "Stretch", "Traversal with null markers", 4),
    makeQuestion("q60", "Implement Trie", "implement-trie-prefix-tree", "Tries", "Medium", "Core", "Prefix tree operations", 4),

    makeQuestion("q61", "Number of Islands", "number-of-islands", "Graphs", "Medium", "Core", "Grid flood fill", 5),
    makeQuestion("q62", "Flood Fill", "flood-fill", "Graphs", "Easy", "Core", "DFS/BFS component", 5),
    makeQuestion("q63", "Clone Graph", "clone-graph", "Graphs", "Medium", "Core", "Traversal plus node map", 5),
    makeQuestion("q64", "Rotting Oranges", "rotting-oranges", "Graphs", "Medium", "Core", "Multi-source BFS", 5),
    makeQuestion("q65", "Course Schedule", "course-schedule", "Graphs", "Medium", "Core", "Topological cycle detection", 5),
    makeQuestion("q66", "Pacific Atlantic Water Flow", "pacific-atlantic-water-flow", "Graphs", "Medium", "Core", "Reverse reachability", 5),
    makeQuestion("q67", "Word Ladder", "word-ladder", "Graphs", "Hard", "Stretch", "BFS over word states", 5),
    makeQuestion("q68", "Find if Path Exists in Graph", "find-if-path-exists-in-graph", "Graphs", "Easy", "Core", "Adjacency traversal", 5),
    makeQuestion("q69", "Network Delay Time", "network-delay-time", "Graphs", "Medium", "Core", "Dijkstra shortest paths", 5),
    makeQuestion("q70", "Accounts Merge", "accounts-merge", "Graphs", "Medium", "Core", "Connected components / DSU", 5),
    makeQuestion("q71", "Kth Largest Element in an Array", "kth-largest-element-in-an-array", "Heap", "Medium", "Core", "Heap or quickselect", 5),
    makeQuestion("q72", "Find Median from Data Stream", "find-median-from-data-stream", "Heap", "Hard", "Stretch", "Balanced two heaps", 5),
    makeQuestion("q73", "Merge Intervals", "merge-intervals", "Intervals", "Medium", "Core", "Sort and merge", 5),
    makeQuestion("q74", "Insert Interval", "insert-interval", "Intervals", "Medium", "Core", "Three-phase scan", 5),
    makeQuestion("q75", "Non-overlapping Intervals", "non-overlapping-intervals", "Intervals", "Medium", "Core", "Greedy earliest finish", 5),

    makeQuestion("q76", "Subsets", "subsets", "Backtracking", "Medium", "Core", "Include or exclude", 6),
    makeQuestion("q77", "Permutations", "permutations", "Backtracking", "Medium", "Core", "Used-set decision tree", 6),
    makeQuestion("q78", "Combination Sum", "combination-sum", "Backtracking", "Medium", "Core", "Choose, recurse, undo", 6),
    makeQuestion("q79", "Generate Parentheses", "generate-parentheses", "Backtracking", "Medium", "Core", "Validity-constrained generation", 6),
    makeQuestion("q80", "Word Search", "word-search", "Backtracking", "Medium", "Core", "Grid DFS with rollback", 6),
    makeQuestion("q81", "N-Queens", "n-queens", "Backtracking", "Hard", "Stretch", "Constraint sets", 6),
    makeQuestion("q82", "Climbing Stairs", "climbing-stairs", "Dynamic Programming", "Easy", "Core", "One-dimensional recurrence", 6),
    makeQuestion("q83", "House Robber", "house-robber", "Dynamic Programming", "Medium", "Core", "Take or skip", 6),
    makeQuestion("q84", "Coin Change", "coin-change", "Dynamic Programming", "Medium", "Core", "Minimum-count states", 6),
    makeQuestion("q85", "Longest Increasing Subsequence", "longest-increasing-subsequence", "Dynamic Programming", "Medium", "Stretch", "DP then tails optimization", 6),
    makeQuestion("q86", "Longest Common Subsequence", "longest-common-subsequence", "Dynamic Programming", "Medium", "Stretch", "Two-sequence grid DP", 6),
    makeQuestion("q87", "Partition Equal Subset Sum", "partition-equal-subset-sum", "Dynamic Programming", "Medium", "Core", "Subset-sum states", 6),
    makeQuestion("q88", "Word Break", "word-break", "Dynamic Programming", "Medium", "Core", "Reachable prefix states", 6),
    makeQuestion("q89", "Decode Ways", "decode-ways", "Dynamic Programming", "Medium", "Core", "One- and two-digit transitions", 6),
    makeQuestion("q90", "Unique Paths", "unique-paths", "Dynamic Programming", "Medium", "Core", "Grid path recurrence", 6)
  ];

  const makeA2ZQuestion = (id, title, path, topic, difficulty, pattern, module, priority = "Core") => ({
    id,
    title,
    url: path.startsWith("http") ? path : problemUrl(path),
    solutionUrl: path.startsWith("http") ? path : leetcodeSolutionUrl(path),
    topic,
    difficulty,
    priority,
    pattern,
    week: 0,
    collection: "A2Z Essentials",
    module
  });

  const a2zQuestions = [
    makeA2ZQuestion("a01", "Greatest Common Divisor of Array", "find-greatest-common-divisor-of-array", "Maths", "Easy", "Min/max plus Euclidean GCD", "Foundations & Sorting"),
    makeA2ZQuestion("a02", "Palindrome Number", "palindrome-number", "Maths", "Easy", "Reverse digits safely", "Foundations & Sorting"),
    makeA2ZQuestion("a03", "Count Primes", "count-primes", "Maths", "Medium", "Sieve of Eratosthenes", "Foundations & Sorting"),
    makeA2ZQuestion("a04", "Selection Sort", "https://www.geeksforgeeks.org/problems/selection-sort/1", "Sorting", "Easy", "Select the minimum suffix", "Foundations & Sorting"),
    makeA2ZQuestion("a05", "Bubble Sort", "https://www.geeksforgeeks.org/problems/bubble-sort/1", "Sorting", "Easy", "Swap adjacent inversions", "Foundations & Sorting"),
    makeA2ZQuestion("a06", "Insertion Sort", "https://www.geeksforgeeks.org/problems/insertion-sort/1", "Sorting", "Easy", "Insert into sorted prefix", "Foundations & Sorting"),
    makeA2ZQuestion("a07", "Merge Sort", "https://www.geeksforgeeks.org/problems/merge-sort/1", "Sorting", "Medium", "Divide, sort, merge", "Foundations & Sorting"),
    makeA2ZQuestion("a08", "Quick Sort", "https://www.geeksforgeeks.org/problems/quick-sort/1", "Sorting", "Medium", "Partition around a pivot", "Foundations & Sorting"),

    makeA2ZQuestion("a09", "Remove Duplicates from Sorted Array", "remove-duplicates-from-sorted-array", "Arrays", "Easy", "Slow and fast pointers", "Arrays & Hashing"),
    makeA2ZQuestion("a10", "Missing Number", "missing-number", "Arrays", "Easy", "XOR or expected sum", "Arrays & Hashing"),
    makeA2ZQuestion("a11", "Sort Colors", "sort-colors", "Arrays", "Medium", "Dutch national flag", "Arrays & Hashing"),
    makeA2ZQuestion("a12", "Next Permutation", "next-permutation", "Arrays", "Medium", "Pivot, successor, reverse", "Arrays & Hashing"),
    makeA2ZQuestion("a13", "Leaders in an Array", "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1", "Arrays", "Easy", "Right-to-left maximum", "Arrays & Hashing"),
    makeA2ZQuestion("a14", "Inversion Count", "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1", "Arrays", "Medium", "Count during merge sort", "Arrays & Hashing"),
    makeA2ZQuestion("a15", "Reverse Pairs", "reverse-pairs", "Arrays", "Hard", "Modified merge counting", "Arrays & Hashing", "Stretch"),

    makeA2ZQuestion("a16", "Find First and Last Position", "find-first-and-last-position-of-element-in-sorted-array", "Binary Search", "Medium", "Lower and upper boundaries", "Binary Search"),
    makeA2ZQuestion("a17", "Single Element in a Sorted Array", "single-element-in-a-sorted-array", "Binary Search", "Medium", "Pair-index parity", "Binary Search"),
    makeA2ZQuestion("a18", "Find Peak Element", "find-peak-element", "Binary Search", "Medium", "Follow the rising slope", "Binary Search"),
    makeA2ZQuestion("a19", "Capacity to Ship Packages Within D Days", "capacity-to-ship-packages-within-d-days", "Binary Search", "Medium", "Binary search on capacity", "Binary Search"),

    makeA2ZQuestion("a20", "Pow(x, n)", "powx-n", "Recursion", "Medium", "Exponentiation by squaring", "Recursion & Backtracking"),
    makeA2ZQuestion("a21", "Combination Sum II", "combination-sum-ii", "Backtracking", "Medium", "Sorted choices plus duplicate skip", "Recursion & Backtracking"),
    makeA2ZQuestion("a22", "Palindrome Partitioning", "palindrome-partitioning", "Backtracking", "Medium", "Partition decision tree", "Recursion & Backtracking"),
    makeA2ZQuestion("a23", "Subsets II", "subsets-ii", "Backtracking", "Medium", "Sort and skip duplicate branches", "Recursion & Backtracking"),

    makeA2ZQuestion("a24", "Middle of the Linked List", "middle-of-the-linked-list", "Linked List", "Easy", "Fast and slow pointers", "Linked Lists"),
    makeA2ZQuestion("a25", "Palindrome Linked List", "palindrome-linked-list", "Linked List", "Easy", "Middle, reverse, compare", "Linked Lists"),
    makeA2ZQuestion("a26", "Add Two Numbers", "add-two-numbers", "Linked List", "Medium", "Digit-by-digit carry", "Linked Lists"),
    makeA2ZQuestion("a27", "Intersection of Two Linked Lists", "intersection-of-two-linked-lists", "Linked List", "Easy", "Pointer path switching", "Linked Lists"),
    makeA2ZQuestion("a28", "Reverse Nodes in k-Group", "reverse-nodes-in-k-group", "Linked List", "Hard", "Reverse fixed-size segments", "Linked Lists", "Stretch"),

    makeA2ZQuestion("a29", "Number of 1 Bits", "number-of-1-bits", "Bit Manipulation", "Easy", "Clear the lowest set bit", "Bit Manipulation"),
    makeA2ZQuestion("a30", "Power of Two", "power-of-two", "Bit Manipulation", "Easy", "Single set-bit test", "Bit Manipulation"),
    makeA2ZQuestion("a31", "Minimum Bit Flips to Convert Number", "minimum-bit-flips-to-convert-number", "Bit Manipulation", "Easy", "XOR then count set bits", "Bit Manipulation"),
    makeA2ZQuestion("a32", "Single Number II", "single-number-ii", "Bit Manipulation", "Medium", "Bit counts modulo three", "Bit Manipulation"),

    makeA2ZQuestion("a33", "Assign Cookies", "assign-cookies", "Greedy", "Easy", "Sort and match", "Greedy & Intervals"),
    makeA2ZQuestion("a34", "Lemonade Change", "lemonade-change", "Greedy", "Easy", "Preserve useful change", "Greedy & Intervals"),
    makeA2ZQuestion("a35", "Jump Game II", "jump-game-ii", "Greedy", "Medium", "Layered farthest reach", "Greedy & Intervals"),
    makeA2ZQuestion("a36", "Candy", "candy", "Greedy", "Hard", "Two directional constraints", "Greedy & Intervals", "Stretch"),
    makeA2ZQuestion("a37", "N Meetings in One Room", "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1", "Greedy", "Medium", "Earliest finishing interval", "Greedy & Intervals"),

    makeA2ZQuestion("a38", "Next Greater Element II", "next-greater-element-ii", "Stack & Queue", "Medium", "Circular monotonic stack", "Stacks & Queues"),
    makeA2ZQuestion("a39", "Asteroid Collision", "asteroid-collision", "Stack & Queue", "Medium", "Resolve active collisions", "Stacks & Queues"),
    makeA2ZQuestion("a40", "Sliding Window Maximum", "sliding-window-maximum", "Stack & Queue", "Hard", "Monotonic deque", "Stacks & Queues", "Stretch"),
    makeA2ZQuestion("a41", "Sum of Subarray Minimums", "sum-of-subarray-minimums", "Stack & Queue", "Medium", "Contribution via monotonic stacks", "Stacks & Queues"),

    makeA2ZQuestion("a42", "Binary Tree Preorder Traversal", "binary-tree-preorder-traversal", "Trees & BST", "Easy", "Root-left-right traversal", "Trees & Tries"),
    makeA2ZQuestion("a43", "Binary Tree Inorder Traversal", "binary-tree-inorder-traversal", "Trees & BST", "Easy", "Left-root-right traversal", "Trees & Tries"),
    makeA2ZQuestion("a44", "Binary Tree Postorder Traversal", "binary-tree-postorder-traversal", "Trees & BST", "Easy", "Left-right-root traversal", "Trees & Tries"),
    makeA2ZQuestion("a45", "Binary Tree Zigzag Level Order Traversal", "binary-tree-zigzag-level-order-traversal", "Trees & BST", "Medium", "BFS with alternating order", "Trees & Tries"),
    makeA2ZQuestion("a46", "Lowest Common Ancestor of a Binary Tree", "lowest-common-ancestor-of-a-binary-tree", "Trees & BST", "Medium", "Postorder convergence", "Trees & Tries"),
    makeA2ZQuestion("a47", "Flatten Binary Tree to Linked List", "flatten-binary-tree-to-linked-list", "Trees & BST", "Medium", "Reverse preorder rewiring", "Trees & Tries"),

    makeA2ZQuestion("a48", "Number of Provinces", "number-of-provinces", "Graphs", "Medium", "Connected components", "Graphs & Heaps"),
    makeA2ZQuestion("a49", "Is Graph Bipartite?", "is-graph-bipartite", "Graphs", "Medium", "Two-color traversal", "Graphs & Heaps"),
    makeA2ZQuestion("a50", "Surrounded Regions", "surrounded-regions", "Graphs", "Medium", "Boundary-connected flood fill", "Graphs & Heaps"),
    makeA2ZQuestion("a51", "Cheapest Flights Within K Stops", "cheapest-flights-within-k-stops", "Graphs", "Medium", "Shortest path with stop state", "Graphs & Heaps"),
    makeA2ZQuestion("a52", "Min Cost to Connect All Points", "min-cost-to-connect-all-points", "Graphs", "Medium", "Minimum spanning tree", "Graphs & Heaps"),

    makeA2ZQuestion("a53", "House Robber II", "house-robber-ii", "Dynamic Programming", "Medium", "Split the circular cases", "Dynamic Programming"),
    makeA2ZQuestion("a54", "Minimum Path Sum", "minimum-path-sum", "Dynamic Programming", "Medium", "Grid prefix recurrence", "Dynamic Programming"),
    makeA2ZQuestion("a55", "Edit Distance", "edit-distance", "Dynamic Programming", "Medium", "Insert, delete, replace states", "Dynamic Programming"),
    makeA2ZQuestion("a56", "Target Sum", "target-sum", "Dynamic Programming", "Medium", "Signed sum states", "Dynamic Programming"),
    makeA2ZQuestion("a57", "Best Time to Buy and Sell Stock II", "best-time-to-buy-and-sell-stock-ii", "Dynamic Programming", "Medium", "Hold or free state", "Dynamic Programming"),

    makeA2ZQuestion("a58", "Maximum XOR of Two Numbers in an Array", "maximum-xor-of-two-numbers-in-an-array", "Tries", "Medium", "Bitwise trie opposite path", "Tries & Advanced Strings"),
    makeA2ZQuestion("a59", "Find the Index of the First Occurrence in a String", "find-the-index-of-the-first-occurrence-in-a-string", "Advanced Strings", "Easy", "Linear scan or KMP", "Tries & Advanced Strings"),
    makeA2ZQuestion("a60", "Longest Happy Prefix", "longest-happy-prefix", "Advanced Strings", "Hard", "KMP prefix function", "Tries & Advanced Strings", "Stretch")
  ];

  const interviewQuestions = [...coreQuestions, ...a2zQuestions];
  const COMPLETE_A2Z_COLLECTION = "Complete A2Z 442";
  const normalizeTitle = (title) => title.toLowerCase().replace(/[^a-z0-9]/g, "");
  const interviewProgressByTitle = new Map(interviewQuestions.map((question) => [normalizeTitle(question.title), question.id]));
  const striverData = window.STRIVER_A2Z || { modules: [], sections: [], items: [] };
  const difficultyLabel = { basic: "Basic", core: "Core", pro: "Pro", unrated: "Lesson" };
  const completeA2ZQuestions = striverData.items.map((item, index) => {
    const [title, slug, practiceFlag, moduleIndex, sectionIndex, difficulty, solutionUrl, platformUrl] = item;
    const kind = practiceFlag ? "practice" : "learning";
    const officialUrl = kind === "learning"
      ? `https://takeuforward.org/learning/dsa/${slug}?source=strivers-a2z-dsa-sheet`
      : `https://takeuforward.org/plus/dsa/problems/${slug}?source=strivers-a2z-dsa-track`;
    return {
      id: `s${String(index + 1).padStart(3, "0")}`,
      title,
      url: platformUrl || officialUrl,
      officialUrl,
      solutionUrl: solutionUrl || officialUrl,
      topic: striverData.sections[sectionIndex] || striverData.modules[moduleIndex],
      difficulty: difficultyLabel[difficulty] || "Lesson",
      priority: difficulty === "pro" ? "Stretch" : "Core",
      pattern: kind === "learning" ? "Concept lesson" : (striverData.sections[sectionIndex] || "Practice problem"),
      week: 0,
      collection: COMPLETE_A2Z_COLLECTION,
      module: striverData.modules[moduleIndex] || "Striver A2Z",
      kind,
      sourcePosition: index + 1,
      progressId: interviewProgressByTitle.get(normalizeTitle(title)) || null
    };
  });
  const questions = [...interviewQuestions, ...completeA2ZQuestions];
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const completeModuleOrder = striverData.modules || [];
  const moduleRank = (module) => {
    const completeIndex = completeModuleOrder.indexOf(module);
    if (libraryPreset === "striver" && completeIndex >= 0) return completeIndex;
    const interviewIndex = MODULE_ORDER.indexOf(module);
    if (interviewIndex >= 0) return interviewIndex;
    return MODULE_ORDER.length + (completeIndex >= 0 ? completeIndex : 999);
  };

  const behavioralPrompts = [
    { id: "intro", title: "Tell me about yourself.", cue: "Connect your 2025 ECE degree, GATE CS preparation, C/C++, core CS, Smart Quality Test System, and current software-engineering direction in 60–75 seconds." },
    { id: "why-apprenticeship", title: "Why this Google apprenticeship?", cue: "Balance three points: structured learning, real software work, and the contribution you can already make through fundamentals and disciplined learning." },
    { id: "ece-to-cs", title: "Why did you move from ECE to software?", cue: "Show a positive pull toward problem solving and CS—not rejection of ECE. Use GATE CS and consistent DSA practice as evidence." },
    { id: "difficult-problem", title: "Tell me about a difficult problem you solved.", cue: "Choose a technical blocker from YOLOv5/OCR or a meaningful coding problem. Make the diagnosis and decision process specific." },
    { id: "leadership", title: "Describe a time you showed leadership.", cue: "Use the three-person major-project team. Explain how you created clarity, divided ownership, integrated work, and protected the outcome." },
    { id: "conflict", title: "Tell me about a disagreement with a teammate.", cue: "Show listening, evidence, a shared goal, and a concrete resolution. Avoid making the other person look careless." },
    { id: "failure", title: "Tell me about a failure or setback.", cue: "Choose a real setback, own your part, explain the recovery, and end with a behavior that changed afterward." },
    { id: "feedback", title: "Describe difficult feedback you received.", cue: "Show low defensiveness: what you heard, how you checked it, what you changed, and how the result improved." },
    { id: "ambiguity", title: "How have you handled an ambiguous task?", cue: "Explain how you turned uncertainty into questions, assumptions, a small test, and a decision." },
    { id: "learning", title: "Tell me about learning something quickly.", cue: "GATE CS preparation or YOLOv5/OCR are strong options. Show the learning system, not only the topic." },
    { id: "priorities", title: "Describe a time you managed competing priorities.", cue: "Explain how you ranked impact and urgency, communicated trade-offs, and still maintained quality." },
    { id: "user-focus", title: "When did you improve something for a user?", cue: "Frame the quality-test system around the operator or reviewer: what friction existed and how your design reduced it." },
    { id: "integrity", title: "Tell me about an ethical or quality decision.", cue: "Use a moment when accuracy, honesty, safety, or transparent reporting mattered more than appearing successful." },
    { id: "collaboration", title: "How do you work with someone different from you?", cue: "Use curiosity, role clarity, communication preferences, and a shared standard for the work." },
    { id: "growth", title: "What is one area you are improving?", cue: "Choose a real, non-fatal gap. Explain the practice system and evidence of progress; do not disguise a strength as a weakness." }
  ];

  const coreTopics = [
    { id: "cpp-stl", code: "C++", title: "STL and complexity", cue: "Containers are choices, not memorized syntax.", questions: ["vector vs list: when and why?", "map vs unordered_map trade-offs", "Iterator invalidation examples"] },
    { id: "cpp-memory", code: "C++", title: "Memory, references, and RAII", cue: "Explain ownership without jargon first.", questions: ["Stack vs heap allocation", "Pointer vs reference", "Why RAII prevents leaks"] },
    { id: "oop", code: "OOP", title: "OOP and clean design", cue: "Use a small real example for every principle.", questions: ["Encapsulation vs abstraction", "Runtime polymorphism", "Composition vs inheritance"] },
    { id: "os-process", code: "OS", title: "Processes, threads, and scheduling", cue: "Connect concepts to what the machine actually does.", questions: ["Process vs thread", "Context-switch cost", "User vs kernel mode"] },
    { id: "os-sync", code: "OS", title: "Synchronization and deadlocks", cue: "State the race before naming the tool.", questions: ["Mutex vs semaphore", "Four deadlock conditions", "Preventing race conditions"] },
    { id: "os-memory", code: "OS", title: "Virtual memory and paging", cue: "Walk from a virtual address to physical memory.", questions: ["Page fault sequence", "Paging vs segmentation", "What is thrashing?"] },
    { id: "dbms-design", code: "DB", title: "Normalization and indexes", cue: "Explain the trade-off between reads, writes, and redundancy.", questions: ["1NF to 3NF in one example", "How a B+ tree index helps", "When an index can hurt"] },
    { id: "dbms-tx", code: "DB", title: "Transactions and concurrency", cue: "Use a money-transfer example.", questions: ["Explain ACID", "Dirty vs non-repeatable read", "Optimistic vs pessimistic locking"] },
    { id: "sql", code: "SQL", title: "SQL interview patterns", cue: "Write, test mentally, then discuss complexity.", questions: ["Second-highest salary", "JOIN vs subquery", "GROUP BY with HAVING"] },
    { id: "cn-web", code: "CN", title: "HTTP, HTTPS, and DNS", cue: "Trace what happens after entering a URL.", questions: ["DNS resolution path", "TCP + TLS handshake", "HTTP methods and status codes"] },
    { id: "cn-transport", code: "CN", title: "TCP, UDP, and reliability", cue: "Choose the protocol from product requirements.", questions: ["TCP vs UDP", "Flow vs congestion control", "Why the three-way handshake?"] },
    { id: "git", code: "Git", title: "Git and collaboration", cue: "Be comfortable explaining your actual workflow.", questions: ["Commit, branch, merge", "Merge vs rebase", "Resolve a conflict safely"] },
    { id: "project-model", code: "ML", title: "YOLOv5 and OCR pipeline", cue: "Separate detection, recognition, and decision logic.", questions: ["Why YOLOv5?", "How OCR errors propagate", "Latency vs accuracy trade-off"] },
    { id: "project-metrics", code: "Proj", title: "Project metrics and ownership", cue: "Define the 95% figure precisely and claim only your work.", questions: ["What exactly was measured?", "Most important failure case", "Your contribution vs team contribution"] }
  ];

  const roadmap = [
    { week: 1, title: "Arrays + Hashing", summary: "Build fast pattern recognition and clean C++ loops.", targets: ["15 questions", "Dry runs", "Complexity aloud"] },
    { week: 2, title: "Strings + Windows", summary: "Control invariants, duplicates, and pointer movement.", targets: ["15 questions", "Window invariants", "Edge cases"] },
    { week: 3, title: "Search + Lists", summary: "Turn constraints into search space and pointer structure.", targets: ["15 questions", "Binary-search bounds", "Pointer safety"] },
    { week: 4, title: "Trees + Tries", summary: "Make recursion state and return values explicit.", targets: ["15 questions", "DFS/BFS", "BST invariants"] },
    { week: 5, title: "Graphs + Intervals", summary: "Model relationships before choosing an algorithm.", targets: ["15 questions", "Visited state", "Shortest paths"] },
    { week: 6, title: "DP + Mixed Mocks", summary: "Define states, transitions, and interview-ready trade-offs.", targets: ["15 questions", "3 mixed mocks", "Revision queue"] }
  ];

  const defaultState = {
    questions: {},
    daily: { date: "", checks: {} },
    stars: {},
    activePrompt: "intro",
    core: {},
    mocks: [],
    checklist: {},
    currentQuestionId: null,
    planner: { track: "balanced", perDay: 2, days: 6, assignments: [] }
  };

  const loadState = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!parsed || typeof parsed !== "object") return structuredClone(defaultState);
      return {
        ...structuredClone(defaultState),
        ...parsed,
        questions: parsed.questions || {},
        daily: { ...defaultState.daily, ...(parsed.daily || {}), checks: parsed.daily?.checks || {} },
        stars: parsed.stars || {},
        core: parsed.core || {},
        mocks: Array.isArray(parsed.mocks) ? parsed.mocks : [],
        checklist: parsed.checklist || {},
        planner: {
          ...defaultState.planner,
          ...(parsed.planner || {}),
          assignments: Array.isArray(parsed.planner?.assignments) ? parsed.planner.assignments : []
        }
      };
    } catch {
      return structuredClone(defaultState);
    }
  };

  let state = loadState();
  let activePromptId = state.activePrompt || "intro";
  let timerSeconds = 45 * 60;
  let timerHandle = null;
  let toastHandle = null;
  let libraryMode = "all";
  let libraryPreset = "interview";
  let activeStudyId = null;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[character]));
  const saveState = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const resolveProgressId = (id) => questionById.get(id)?.progressId || id;
  const getQuestionState = (id) => {
    const saved = state.questions[resolveProgressId(id)] || {};
    return {
      status: "todo",
      confidence: 0,
      bookmarked: false,
      notes: "",
      mistakes: "",
      mistakeType: "",
      code: "",
      nextRevision: "",
      lastReviewed: "",
      ...saved,
      approach: { brute: false, better: false, optimal: false, ...(saved.approach || {}) }
    };
  };
  const dateKey = (date = new Date()) => [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
  const dayNumber = (date = new Date()) => Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 86400000);
  const addDays = (date, amount) => {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + amount);
    return copy;
  };
  const formatShortDate = (value) => new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(new Date(`${value}T12:00:00`));
  const isDue = (questionState) => questionState.status === "revise" || Boolean(questionState.nextRevision && questionState.nextRevision <= dateKey());
  const revisionDays = (confidence) => ({ 1: 1, 2: 3, 3: 7 }[Number(confidence)] || 2);

  const showToast = (message) => {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastHandle);
    toastHandle = setTimeout(() => toast.classList.remove("show"), 2600);
  };

  const viewMeta = {
    today: ["Your next best step", "Today"],
    roadmap: ["The full preparation path", "Roadmap"],
    planner: ["A realistic weekly sprint", "Study planner"],
    dsa: ["Choose focused or complete practice", "DSA library"],
    behavioral: ["Evidence, not memorized scripts", "Behavioral"],
    core: ["Your technical foundation", "Core CS + project"],
    mocks: ["Practice under interview conditions", "Mock interviews"],
    resources: ["High-signal references", "Resources"]
  };

  function switchView(view) {
    if (!viewMeta[view]) return;
    $$(".view").forEach((element) => element.classList.toggle("active", element.id === `view-${view}`));
    $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
    $("#viewKicker").textContent = viewMeta[view][0];
    $("#viewTitle").textContent = viewMeta[view][1];
    document.body.classList.remove("nav-open");
    $("#mobileMenu").setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextRecommendedQuestion() {
    const today = dateKey();
    const plannedIds = state.planner.assignments
      .filter((assignment) => assignment.date <= today && getQuestionState(assignment.questionId).status !== "solved")
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((assignment) => assignment.questionId);
    const planned = plannedIds.map((id) => questionById.get(id)).find(Boolean);
    if (planned) return planned;
    const fallbackPool = state.planner.track === "striver" ? completeA2ZQuestions : interviewQuestions;
    const needsRevision = fallbackPool.find((question) => isDue(getQuestionState(question.id)));
    if (needsRevision) return needsRevision;
    return fallbackPool.find((question) => question.priority === "Now" && getQuestionState(question.id).status !== "solved")
      || fallbackPool.find((question) => question.priority === "Core" && getQuestionState(question.id).status !== "solved")
      || fallbackPool.find((question) => getQuestionState(question.id).status !== "solved")
      || fallbackPool[0];
  }

  function saveQuestionPatch(id, patch) {
    const progressId = resolveProgressId(id);
    state.questions[progressId] = { ...getQuestionState(id), ...patch };
    saveState();
  }

  function setQuestionStatus(id, status) {
    const current = getQuestionState(id);
    const patch = { status };
    if (status === "solved" && !current.nextRevision) patch.nextRevision = dateKey(addDays(new Date(), revisionDays(current.confidence)));
    if (status === "revise") patch.nextRevision = dateKey();
    saveQuestionPatch(id, patch);
  }

  function setPracticeQuestion(question, markPracticing = true) {
    if (!question) return;
    state.currentQuestionId = question.id;
    if (markPracticing && getQuestionState(question.id).status === "todo") {
      saveQuestionPatch(question.id, { status: "practicing" });
    }
    saveState();
    $("#practiceTitle").textContent = question.title;
    $("#practiceTopic").textContent = question.topic;
    $("#practicePattern").textContent = question.pattern;
    $("#practiceLink").href = question.url;
    updateStats();
  }

  function setupToday() {
    const today = new Date();
    $("#todayDate").textContent = new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short" }).format(today);
    const hour = today.getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
    $("#greeting").textContent = `${greeting}, Sidhartha`;

    const todayKey = dateKey(today);
    if (state.daily.date !== todayKey) state.daily = { date: todayKey, checks: {} };
    $$('[data-daily]').forEach((checkbox) => {
      checkbox.checked = Boolean(state.daily.checks[checkbox.dataset.daily]);
    });

    const question = nextRecommendedQuestion();
    $("#dailyDsaTitle").textContent = question.title;
    $("#dailyDsaMeta").textContent = `${question.topic} · ${question.difficulty} · ${question.pattern}`;
    $("#dailyDsaLink").href = question.url;
    $("#practiceDailyDsa").dataset.questionId = question.id;

    const prompt = behavioralPrompts[dayNumber(today) % behavioralPrompts.length];
    $("#dailyBehaviorTitle").textContent = prompt.title;
    $("#dailyBehaviorCue").textContent = prompt.cue;
    $("#openDailyBehavior").dataset.promptId = prompt.id;

    const topic = coreTopics[(dayNumber(today) + 3) % coreTopics.length];
    $("#dailyCoreTitle").textContent = topic.title;
    $("#dailyCoreCue").textContent = topic.cue;
    $("#openDailyCore").dataset.coreId = topic.id;

    const current = questionById.get(state.currentQuestionId) || question;
    setPracticeQuestion(current, false);
    saveState();
  }

  function renderRoadmap() {
    const firstIncompleteWeek = roadmap.find(({ week }) => questions.some((q) => q.week === week && getQuestionState(q.id).status !== "solved"))?.week || 6;
    $("#roadmapGrid").innerHTML = roadmap.map((item) => {
      const weekQuestions = questions.filter((question) => question.week === item.week);
      const solved = weekQuestions.filter((question) => getQuestionState(question.id).status === "solved").length;
      const percentage = Math.round((solved / weekQuestions.length) * 100);
      return `
        <article class="roadmap-card ${item.week === firstIncompleteWeek ? "current" : ""}">
          <span class="roadmap-number">W${item.week}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <div class="roadmap-targets">${item.targets.map((target) => `<span>${escapeHtml(target)}</span>`).join("")}</div>
          <div class="mini-progress"><div><i style="width:${percentage}%"></i></div><small>${solved}/${weekQuestions.length}</small></div>
        </article>`;
    }).join("");
  }

  function plannerPool(track) {
    const sourcePool = track === "striver"
      ? completeA2ZQuestions
      : track === "core"
        ? coreQuestions
        : track === "a2z"
          ? a2zQuestions
          : interviewQuestions;
    const available = sourcePool.filter((question) => getQuestionState(question.id).status !== "solved");
    const ranked = (items) => items.sort((a, b) => {
      const statusRank = { revise: 0, practicing: 1, todo: 2, solved: 3 };
      const priorityRank = { Now: 0, Core: 1, Stretch: 2 };
      return (statusRank[getQuestionState(a.id).status] - statusRank[getQuestionState(b.id).status])
        || (track === "striver"
          ? (a.sourcePosition || 0) - (b.sourcePosition || 0)
          : priorityRank[a.priority] - priorityRank[b.priority]);
    });
    if (track === "core" || track === "a2z" || track === "striver") return ranked(available);
    const core = ranked(available.filter((question) => question.collection === "Core 90"));
    const a2z = ranked(available.filter((question) => question.collection === "A2Z Essentials"));
    const mixed = [];
    while (core.length || a2z.length) {
      if (core.length) mixed.push(core.shift());
      if (a2z.length) mixed.push(a2z.shift());
    }
    return mixed;
  }

  function generatePlanner() {
    const track = $("#plannerTrack").value;
    const perDay = Number($("#plannerPerDay").value);
    const days = Number($("#plannerDays").value);
    const offsets = days === 1 ? [0] : Array.from({ length: days }, (_, index) => Math.round(index * 6 / (days - 1)));
    const pool = plannerPool(track);
    const assignments = [];
    let cursor = 0;
    offsets.forEach((offset) => {
      for (let slot = 0; slot < perDay && pool[cursor]; slot += 1) {
        assignments.push({ date: dateKey(addDays(new Date(), offset)), questionId: pool[cursor].id });
        cursor += 1;
      }
    });
    state.planner = { track, perDay, days, assignments };
    saveState();
    renderPlanner();
    setupToday();
    updateStats();
    showToast(`Weekly sprint created with ${assignments.length} questions.`);
  }

  function renderPlanner() {
    if (!$("#weeklyPlan")) return;
    $("#plannerTrack").value = state.planner.track;
    $("#plannerPerDay").value = String(state.planner.perDay);
    $("#plannerDays").value = String(state.planner.days);

    const today = dateKey();
    const visibleDates = Array.from({ length: 7 }, (_, index) => dateKey(addDays(new Date(), index)));
    const carryover = state.planner.assignments.filter((assignment) => assignment.date < today && getQuestionState(assignment.questionId).status !== "solved");
    const completed = state.planner.assignments.filter((assignment) => getQuestionState(assignment.questionId).status === "solved").length;
    const total = state.planner.assignments.length;
    const percentage = total ? Math.round((completed / total) * 100) : 0;

    $("#plannerProgress").textContent = `${percentage}%`;
    $("#plannerProgressFill").style.width = `${percentage}%`;
    $("#plannerCompleted").textContent = `${completed} / ${total}`;
    $("#plannerCarryover").textContent = String(carryover.length);

    if (!total) {
      $("#weeklyPlan").innerHTML = '<div class="planner-empty"><strong>No sprint generated yet.</strong><span>Choose a track and workload, then create your first seven-day plan.</span></div>';
      return;
    }

    $("#weeklyPlan").innerHTML = visibleDates.map((date, index) => {
      const scheduled = state.planner.assignments.filter((assignment) => assignment.date === date);
      const tasks = [...(index === 0 ? carryover : []), ...scheduled.filter((assignment) => !carryover.includes(assignment))];
      return `<article class="planner-day ${index === 0 ? "today" : ""}">
        <div class="planner-day-head"><div><span>${index === 0 ? "Today" : new Intl.DateTimeFormat("en-IN", { weekday: "short" }).format(new Date(`${date}T12:00:00`))}</span><strong>${formatShortDate(date)}</strong></div><small>${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}</small></div>
        <div class="plan-tasks">${tasks.length ? tasks.map((assignment) => {
          const question = questionById.get(assignment.questionId);
          if (!question) return "";
          const done = getQuestionState(question.id).status === "solved";
          const late = assignment.date < today && !done;
          return `<button class="plan-task ${done ? "done" : ""}" data-open-study="${question.id}"><span>${done ? "✓" : late ? "!" : "○"}</span><span><strong>${escapeHtml(question.title)}</strong><small>${late ? "Carryover · " : ""}${escapeHtml(question.module)}</small></span></button>`;
        }).join("") : '<p class="rest-day">Rest, revise, or run a mock.</p>'}</div>
      </article>`;
    }).join("");
  }

  function activePresetQuestions() {
    if (libraryPreset === "striver") return completeA2ZQuestions;
    if (libraryPreset === "all") return questions;
    return interviewQuestions;
  }

  function replaceSelectOptions(selector, firstLabel, values) {
    const select = $(selector);
    const previous = select.value;
    select.innerHTML = `<option value="all">${escapeHtml(firstLabel)}</option>${values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}`;
    select.value = values.includes(previous) ? previous : "all";
  }

  function populateTopicFilter() {
    const preset = activePresetQuestions();
    const collections = [...new Set(preset.map((question) => question.collection))];
    replaceSelectOptions("#collectionFilter", "All collections", collections);
    const collection = $("#collectionFilter").value;
    const collectionPool = preset.filter((question) => collection === "all" || question.collection === collection);
    const modules = [...new Set(collectionPool.map((question) => question.module))].sort((a, b) => moduleRank(a) - moduleRank(b));
    replaceSelectOptions("#moduleFilter", "All modules", modules);
    const module = $("#moduleFilter").value;
    const topics = [...new Set(collectionPool.filter((question) => module === "all" || question.module === module).map((question) => question.topic))].sort();
    replaceSelectOptions("#topicFilter", "All topics / sections", topics);
  }

  function updateLibraryIntro() {
    const meta = {
      interview: {
        kicker: "150-question interview track",
        heading: "Core 90 + A2Z essentials",
        lead: "Your focused Google-apprenticeship route: 90 interview-pattern questions plus 60 gap-covering A2Z essentials."
      },
      striver: {
        kicker: "Official complete curriculum · 442 items",
        heading: "Complete Striver A2Z",
        lead: "Work through all 403 practice problems and 39 learning lessons in the official 19-module order, with solution and coding-platform links."
      },
      all: {
        kicker: "Combined library · 592 entries",
        heading: "Every preparation collection",
        lead: "Search the focused Interview 150 and the complete 442-item A2Z curriculum together. Shared titles reuse the same saved progress."
      }
    }[libraryPreset];
    $("#libraryKicker").textContent = meta.kicker;
    $("#dsa-heading").textContent = meta.heading;
    $("#libraryLead").textContent = meta.lead;
    $("#libraryAllLabel").textContent = `All ${activePresetQuestions().length}`;
    $$('[data-collection-preset]').forEach((button) => button.classList.toggle("active", button.dataset.collectionPreset === libraryPreset));
  }

  function updateLibraryStats() {
    const pool = activePresetQuestions();
    const solved = pool.filter((question) => getQuestionState(question.id).status === "solved").length;
    const review = pool.filter((question) => isDue(getQuestionState(question.id))).length;
    const bookmarks = pool.filter((question) => getQuestionState(question.id).bookmarked).length;
    const confidenceValues = pool.map((question) => Number(getQuestionState(question.id).confidence)).filter(Boolean);
    const confidence = confidenceValues.length ? (confidenceValues.reduce((sum, value) => sum + value, 0) / confidenceValues.length).toFixed(1) : "—";
    const percent = pool.length ? Math.round((solved / pool.length) * 100) : 0;
    $("#dsaSolvedMetric").textContent = solved;
    $("#dsaReviewMetric").textContent = review;
    $("#dsaBookmarkMetric").textContent = bookmarks;
    $("#dsaConfidenceMetric").textContent = confidence;
    $("#bankProgressFill").style.width = `${percent}%`;
    $("#bankProgressText").textContent = `${percent}%`;
  }

  function questionMatchesFilters(question) {
    const search = $("#questionSearch").value.trim().toLowerCase();
    const topic = $("#topicFilter").value;
    const collection = $("#collectionFilter").value;
    const module = $("#moduleFilter").value;
    const difficulty = $("#difficultyFilter").value;
    const status = $("#statusFilter").value;
    const kind = $("#typeFilter").value;
    const questionState = getQuestionState(question.id);
    const searchable = `${question.title} ${question.pattern} ${question.topic} ${question.module} ${question.collection}`.toLowerCase();
    const presetMatches = libraryPreset === "all"
      || (libraryPreset === "interview" && question.collection !== COMPLETE_A2Z_COLLECTION)
      || (libraryPreset === "striver" && question.collection === COMPLETE_A2Z_COLLECTION);
    const modeMatches = libraryMode === "all"
      || (libraryMode === "due" && isDue(questionState))
      || (libraryMode === "bookmarked" && questionState.bookmarked)
      || (libraryMode === "mistakes" && Boolean(questionState.mistakes || questionState.mistakeType))
      || (libraryMode === "unsolved" && questionState.status !== "solved");
    return (!search || searchable.includes(search))
      && presetMatches
      && modeMatches
      && (topic === "all" || question.topic === topic)
      && (collection === "all" || question.collection === collection)
      && (module === "all" || question.module === module)
      && (kind === "all" || (question.kind || "practice") === kind)
      && (difficulty === "all" || question.difficulty === difficulty)
      && (status === "all" || questionState.status === status);
  }

  function statusOptions(selected) {
    return [
      ["todo", "To do"], ["practicing", "Practicing"], ["revise", "Revise"], ["solved", "Solved"]
    ].map(([value, label]) => `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`).join("");
  }

  function confidenceOptions(selected) {
    return [
      [0, "—"], [1, "1 · Low"], [2, "2 · Okay"], [3, "3 · Strong"]
    ].map(([value, label]) => `<option value="${value}" ${Number(selected) === value ? "selected" : ""}>${label}</option>`).join("");
  }

  function renderModuleOverview() {
    const collection = $("#collectionFilter").value;
    const pool = activePresetQuestions().filter((question) => collection === "all" || question.collection === collection);
    const modules = [...new Set(pool.map((question) => question.module))].sort((a, b) => moduleRank(a) - moduleRank(b));
    $("#moduleOverview").innerHTML = modules.map((module) => {
      const items = pool.filter((question) => question.module === module);
      const solved = items.filter((question) => getQuestionState(question.id).status === "solved").length;
      const percent = Math.round((solved / items.length) * 100);
      return `<button class="module-stat" data-module-pick="${escapeHtml(module)}">
        <span><strong>${escapeHtml(module)}</strong><small>${solved}/${items.length} solved</small></span>
        <span class="module-ring" style="--module-progress:${percent * 3.6}deg">${percent}%</span>
      </button>`;
    }).join("");
  }

  function renderQuestions() {
    const visible = questions.filter(questionMatchesFilters);
    const list = $("#questionList");
    list.innerHTML = `
      <div class="question-header" aria-hidden="true"><span>Status</span><span>Question</span><span>Module</span><span>Level</span><span>Collection</span><span>Confidence</span><span>Open</span></div>
      ${visible.map((question) => {
        const questionState = getQuestionState(question.id);
        const sourcePrefix = question.sourcePosition ? `#${question.sourcePosition} · ${question.kind === "learning" ? "Lesson" : "Problem"} · ` : "";
        const collectionClass = question.collection === "Core 90" ? "core" : question.collection === COMPLETE_A2Z_COLLECTION ? "full" : "a2z";
        return `<article class="question-row" data-question-id="${question.id}">
          <label><span class="sr-only">Status for ${escapeHtml(question.title)}</span><select data-question-status="${question.id}">${statusOptions(questionState.status)}</select></label>
          <div class="question-title"><a href="${question.officialUrl || question.url}" target="_blank" rel="noopener">${questionState.bookmarked ? '<span class="bookmark-mark" aria-label="Bookmarked">★</span> ' : ""}${escapeHtml(question.title)} ↗</a><small>${sourcePrefix}${escapeHtml(question.topic)} · ${escapeHtml(question.pattern)}${question.progressId ? " · synced with Interview 150" : ""}${isDue(questionState) ? ' · <b>review due</b>' : ""}</small></div>
          <div class="question-topic"><span class="topic-chip">${escapeHtml(question.module)}</span></div>
          <span class="difficulty-chip ${question.difficulty.toLowerCase()}">${question.difficulty}</span>
          <span class="collection-chip ${collectionClass}">${escapeHtml(question.collection)}</span>
          <label><span class="sr-only">Confidence for ${escapeHtml(question.title)}</span><select data-question-confidence="${question.id}">${confidenceOptions(questionState.confidence)}</select></label>
          <div class="question-actions"><button class="practice-small" data-open-study="${question.id}">Study</button>${question.solutionUrl ? `<a class="solution-small" href="${question.solutionUrl}" target="_blank" rel="noopener">${question.kind === "learning" ? "Lesson" : "Solution"} ↗</a>` : ""}${question.kind !== "learning" ? `<a class="platform-small" href="${question.url}" target="_blank" rel="noopener">Practice ↗</a>` : ""}</div>
        </article>`;
      }).join("")}`;
    $("#visibleQuestionCount").textContent = visible.length;
    $("#questionEmpty").hidden = visible.length !== 0;
    list.hidden = visible.length === 0;
    updateLibraryStats();
  }

  function clearFilters() {
    $("#questionSearch").value = "";
    $("#topicFilter").value = "all";
    $("#collectionFilter").value = "all";
    $("#moduleFilter").value = "all";
    $("#difficultyFilter").value = "all";
    $("#typeFilter").value = "all";
    $("#statusFilter").value = "all";
    libraryMode = "all";
    $$('[data-library-mode]').forEach((button) => button.classList.toggle("active", button.dataset.libraryMode === "all"));
    populateTopicFilter();
    renderModuleOverview();
    renderQuestions();
  }

  function questionHints(question) {
    if (question.kind === "learning") return [
      "Read the lesson once for structure, then close it and write the idea back in your own words.",
      `Connect this lesson to the ${question.module} module and record one example that makes the concept concrete.`,
      "Explain the concept aloud without notes, then save the definition, one example, and one common mistake."
    ];
    return [
      "Build the smallest correct brute-force solution first. Name the repeated work and estimate its time and space complexity.",
      `Look for the ${question.pattern.toLowerCase()} pattern. State the invariant or subproblem it maintains before writing code.`,
      `Target the interview-ready approach: ${question.pattern}. Dry-run one normal case and one edge case, then justify complexity.`
    ];
  }

  function openStudySheet(id) {
    const question = questionById.get(id);
    if (!question) return;
    const questionState = getQuestionState(id);
    const hints = questionHints(question);
    activeStudyId = id;
    $("#studyTitle").textContent = question.title;
    $("#studyMeta").textContent = `${question.collection} · ${question.module} · ${question.difficulty}`;
    $("#studyPattern").textContent = question.pattern;
    $("#studyStatus").value = questionState.status;
    $("#studyConfidence").value = String(questionState.confidence);
    $("#studyBookmark").classList.toggle("active", questionState.bookmarked);
    $("#studyBookmark").setAttribute("aria-pressed", String(questionState.bookmarked));
    $("#studyBookmark").textContent = questionState.bookmarked ? "★ Bookmarked" : "☆ Bookmark";
    $$('[data-study-approach]').forEach((checkbox) => { checkbox.checked = Boolean(questionState.approach[checkbox.dataset.studyApproach]); });
    $("#studyNotes").value = questionState.notes;
    $("#studyMistakes").value = questionState.mistakes;
    $("#studyMistakeType").value = questionState.mistakeType;
    $("#studyCode").value = questionState.code;
    $("#studyRevision").value = questionState.nextRevision;
    $("#studyRevisionLabel").textContent = questionState.nextRevision ? `Next review: ${formatShortDate(questionState.nextRevision)}` : "No review scheduled";
    $("#studyPlatform").href = question.url;
    $("#studyPlatform").textContent = question.kind === "learning" ? "Open official lesson ↗" : "Open coding platform ↗";
    $("#studySolution").hidden = !question.solutionUrl || question.kind === "learning";
    $("#studySolution").href = question.solutionUrl || question.officialUrl || question.url;
    $("#studySolution").textContent = question.solutionUrl?.includes("youtube.com") || question.solutionUrl?.includes("youtu.be")
      ? "Watch solution ↗"
      : question.solutionUrl?.includes("/blogs/")
        ? "Open editorial ↗"
        : "Open solution ↗";
    $("#studyPractice").hidden = question.kind === "learning";
    $("#studyHint1").textContent = hints[0];
    $("#studyHint2").textContent = hints[1];
    $("#studyHint3").textContent = hints[2];
    $$(".hint-ladder details").forEach((details) => { details.open = false; });
    $("#studyOverlay").hidden = false;
    document.body.classList.add("study-open");
    $("#studyClose").focus();
  }

  function closeStudySheet() {
    $("#studyOverlay").hidden = true;
    document.body.classList.remove("study-open");
    activeStudyId = null;
  }

  function refreshStudyViews() {
    renderQuestions();
    renderModuleOverview();
    renderPlanner();
    setupToday();
    updateStats();
  }

  function renderPrompts() {
    $("#promptList").innerHTML = behavioralPrompts.map((prompt) => `<button class="prompt-button ${prompt.id === activePromptId ? "active" : ""}" data-prompt-id="${prompt.id}">${escapeHtml(prompt.title)}</button>`).join("");
    loadPrompt(activePromptId, false);
  }

  function loadPrompt(id, rerenderList = true) {
    const prompt = behavioralPrompts.find((item) => item.id === id) || behavioralPrompts[0];
    activePromptId = prompt.id;
    state.activePrompt = prompt.id;
    $("#star-builder-heading").textContent = prompt.title;
    $("#activePromptCue").textContent = prompt.cue;
    const notes = state.stars[prompt.id] || {};
    $$('[data-star-field]').forEach((field) => { field.value = notes[field.dataset.starField] || ""; });
    if (rerenderList) {
      $$(".prompt-button").forEach((button) => button.classList.toggle("active", button.dataset.promptId === prompt.id));
    }
    saveState();
  }

  function renderCore() {
    $("#coreGrid").innerHTML = coreTopics.map((topic) => {
      const done = Boolean(state.core[topic.id]);
      return `<article class="core-card ${done ? "done" : ""}" id="core-card-${topic.id}">
        <div class="core-card-top"><span class="core-card-icon">${escapeHtml(topic.code)}</span><button data-core-toggle="${topic.id}" aria-label="${done ? "Mark incomplete" : "Mark complete"}">${done ? "✓" : "○"}</button></div>
        <h3>${escapeHtml(topic.title)}</h3>
        <p>${escapeHtml(topic.cue)}</p>
        <ul class="core-questions">${topic.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul>
      </article>`;
    }).join("");
    $("#coreDoneCount").textContent = `${coreTopics.filter((topic) => state.core[topic.id]).length} / ${coreTopics.length}`;
  }

  function updateMockAverage() {
    const ranges = $$('[data-score]');
    ranges.forEach((range) => { range.nextElementSibling.value = range.value; });
    const average = ranges.reduce((sum, range) => sum + Number(range.value), 0) / ranges.length;
    $("#mockAverage").textContent = average.toFixed(1);
    return average;
  }

  function renderMockHistory() {
    const history = $("#mockHistory");
    $("#mockCount").textContent = state.mocks.length;
    if (!state.mocks.length) {
      history.innerHTML = '<div class="history-empty">No mock logged yet. Run one this week and record one concrete improvement.</div>';
      return;
    }
    history.innerHTML = state.mocks.slice(0, 6).map((mock) => `
      <article class="history-card">
        <div class="history-card-top"><strong>${Number(mock.average).toFixed(1)}/5</strong><time datetime="${escapeHtml(mock.date)}">${new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(mock.date))}</time></div>
        <p>${escapeHtml(mock.note || "No improvement note recorded.")}</p>
      </article>`).join("");
  }

  function updateStats() {
    const solved = interviewQuestions.filter((question) => getQuestionState(question.id).status === "solved").length;
    const review = interviewQuestions.filter((question) => isDue(getQuestionState(question.id))).length;
    const bookmarks = interviewQuestions.filter((question) => getQuestionState(question.id).bookmarked).length;
    const percent = Math.round((solved / interviewQuestions.length) * 100);
    $("#progressPercent").textContent = `${percent}%`;
    $("#progressRing").style.background = `conic-gradient(var(--blue) ${percent * 3.6}deg, #e8edf4 0deg)`;
    $("#solvedCount").textContent = `${solved} / ${interviewQuestions.length}`;
    $("#reviewCount").textContent = `${review} ${review === 1 ? "question" : "questions"}`;
    $("#nowQueue").textContent = `${interviewQuestions.filter((question) => question.priority === "Now" && getQuestionState(question.id).status !== "solved").length} remaining`;
    $("#bookmarkMetric").textContent = `${bookmarks} saved`;
    const todayTasks = state.planner.assignments.filter((assignment) => assignment.date <= dateKey() && getQuestionState(assignment.questionId).status !== "solved").length;
    $("#todayPlanMetric").textContent = state.planner.assignments.length ? `${todayTasks} open` : "Not planned";
    $("#mockStatus").textContent = state.mocks.length
      ? `Logged ${new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(new Date(state.mocks[0].date))}`
      : "Not logged yet";
    renderRoadmap();
  }

  function updateTimer() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    $("#timer").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function startPauseTimer() {
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
      $("#timerStart").textContent = "Resume";
      return;
    }
    $("#timerStart").textContent = "Pause";
    timerHandle = setInterval(() => {
      timerSeconds -= 1;
      updateTimer();
      if (timerSeconds <= 0) {
        clearInterval(timerHandle);
        timerHandle = null;
        $("#timerStart").textContent = "Start again";
        showToast("Time. Finish your dry run, complexity, and one follow-up.");
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerHandle);
    timerHandle = null;
    timerSeconds = 45 * 60;
    $("#timerStart").textContent = "Start";
    updateTimer();
  }

  function restoreChecklist() {
    $$('[data-checklist]').forEach((checkbox) => { checkbox.checked = Boolean(state.checklist[checkbox.dataset.checklist]); });
  }

  function registerWebMcpTools() {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = (tool) => {
      try {
        void Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});
      } catch {
        // The visible site remains fully usable when WebMCP is unavailable.
      }
    };

    register({
      name: "read_preparation_status",
      title: "Read preparation status",
      description: "Read Sidhartha's focused Interview 150 and complete Striver A2Z 442 progress, revision queues, planner status, mock count, and next recommended question without changing anything.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() {
        const collectionStatus = (pool) => ({
          solved: pool.filter((question) => getQuestionState(question.id).status === "solved").length,
          total: pool.length,
          revision: pool.filter((question) => isDue(getQuestionState(question.id))).length
        });
        const next = nextRecommendedQuestion();
        return {
          interview150: collectionStatus(interviewQuestions),
          completeA2Z: collectionStatus(completeA2ZQuestions),
          plannedTasks: state.planner.assignments.length,
          mocksLogged: state.mocks.length,
          nextQuestion: { id: next.id, title: next.title, topic: next.topic }
        };
      }
    });

    register({
      name: "update_dsa_progress",
      title: "Update DSA progress",
      description: "Update the status and optional confidence for one or more questions in the visible DSA bank.",
      inputSchema: {
        type: "object",
        properties: {
          updates: {
            type: "array",
            minItems: 1,
            maxItems: 20,
            items: {
              type: "object",
              properties: {
                questionId: { type: "string", description: "Stable question id such as q01, a01, or s001." },
                status: { type: "string", enum: ["todo", "practicing", "revise", "solved"] },
                confidence: { type: "integer", minimum: 0, maximum: 3 }
              },
              required: ["questionId", "status"],
              additionalProperties: false
            }
          }
        },
        required: ["updates"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        if (!input || !Array.isArray(input.updates) || input.updates.length < 1 || input.updates.length > 20) throw new Error("Provide 1 to 20 updates.");
        const validStatuses = new Set(["todo", "practicing", "revise", "solved"]);
        for (const update of input.updates) {
          if (!questionById.has(update.questionId)) throw new Error(`Unknown question id: ${update.questionId}`);
          if (!validStatuses.has(update.status)) throw new Error(`Invalid status for ${update.questionId}`);
          if (update.confidence !== undefined && (!Number.isInteger(update.confidence) || update.confidence < 0 || update.confidence > 3)) throw new Error(`Invalid confidence for ${update.questionId}`);
        }
        input.updates.forEach((update) => {
          if (update.confidence !== undefined) saveQuestionPatch(update.questionId, { confidence: update.confidence });
          setQuestionStatus(update.questionId, update.status);
        });
        setupToday();
        renderQuestions();
        renderModuleOverview();
        renderPlanner();
        updateStats();
        return {
          updated: input.updates.length,
          interviewSolved: interviewQuestions.filter((question) => getQuestionState(question.id).status === "solved").length,
          completeA2ZSolved: completeA2ZQuestions.filter((question) => getQuestionState(question.id).status === "solved").length,
          totalAvailable: questions.length
        };
      }
    });

    register({
      name: "start_dsa_practice",
      title: "Start DSA practice",
      description: "Open a selected question in the site's 45-minute practice room and mark it as practicing when it was not started.",
      inputSchema: {
        type: "object",
        properties: { questionId: { type: "string", description: "Stable question id such as q01, a01, or s001." } },
        required: ["questionId"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const question = questionById.get(input?.questionId);
        if (!question) throw new Error("Unknown question id.");
        setPracticeQuestion(question);
        renderQuestions();
        switchView("today");
        setTimeout(() => $("#practiceRoom").scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        return { started: true, question: { id: question.id, title: question.title, topic: question.topic }, timerMinutes: 45 };
      }
    });

    window.addEventListener("pagehide", () => lifecycle.abort(), { once: true });
  }

  function bindEvents() {
    $$(".nav-item").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
    $$('[data-jump]').forEach((button) => button.addEventListener("click", () => switchView(button.dataset.jump)));

    $("#mobileMenu").addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      $("#mobileMenu").setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (event) => {
      if (document.body.classList.contains("nav-open") && !event.target.closest(".sidebar") && !event.target.closest("#mobileMenu")) {
        document.body.classList.remove("nav-open");
        $("#mobileMenu").setAttribute("aria-expanded", "false");
      }
    });

    $$('[data-daily]').forEach((checkbox) => checkbox.addEventListener("change", () => {
      state.daily.checks[checkbox.dataset.daily] = checkbox.checked;
      saveState();
      showToast(checkbox.checked ? "Daily step completed." : "Daily step reopened.");
    }));

    $("#practiceDailyDsa").addEventListener("click", (event) => {
      const question = questionById.get(event.currentTarget.dataset.questionId);
      setPracticeQuestion(question);
      renderQuestions();
      $("#practiceRoom").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#openDailyBehavior").addEventListener("click", (event) => {
      loadPrompt(event.currentTarget.dataset.promptId);
      switchView("behavioral");
    });

    $("#openDailyCore").addEventListener("click", (event) => {
      const id = event.currentTarget.dataset.coreId;
      switchView("core");
      setTimeout(() => $(`#core-card-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
    });

    $("#timerStart").addEventListener("click", startPauseTimer);
    $("#timerReset").addEventListener("click", resetTimer);

    ["#questionSearch", "#topicFilter", "#typeFilter", "#difficultyFilter", "#statusFilter"].forEach((selector) => {
      $(selector).addEventListener(selector === "#questionSearch" ? "input" : "change", renderQuestions);
    });
    $("#collectionFilter").addEventListener("change", () => {
      populateTopicFilter();
      renderModuleOverview();
      renderQuestions();
    });
    $("#moduleFilter").addEventListener("change", () => {
      populateTopicFilter();
      renderQuestions();
    });
    $$('[data-collection-preset]').forEach((button) => button.addEventListener("click", () => {
      libraryPreset = button.dataset.collectionPreset;
      updateLibraryIntro();
      clearFilters();
      showToast(libraryPreset === "striver" ? "Complete A2Z selected: 442 items in official order." : libraryPreset === "all" ? "All 592 entries selected." : "Interview 150 selected.");
    }));
    $("#clearFilters").addEventListener("click", clearFilters);
    $("#emptyClear").addEventListener("click", clearFilters);
    $$('[data-library-mode]').forEach((button) => button.addEventListener("click", () => {
      libraryMode = button.dataset.libraryMode;
      $$('[data-library-mode]').forEach((item) => item.classList.toggle("active", item === button));
      renderQuestions();
    }));
    $("#moduleOverview").addEventListener("click", (event) => {
      const button = event.target.closest("[data-module-pick]");
      if (!button) return;
      $("#moduleFilter").value = button.dataset.modulePick;
      populateTopicFilter();
      renderQuestions();
      $("#questionList").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#questionList").addEventListener("change", (event) => {
      const statusId = event.target.dataset.questionStatus;
      const confidenceId = event.target.dataset.questionConfidence;
      if (statusId) setQuestionStatus(statusId, event.target.value);
      if (confidenceId) saveQuestionPatch(confidenceId, { confidence: Number(event.target.value) });
      if (statusId || confidenceId) {
        setupToday();
        updateStats();
        renderModuleOverview();
        renderPlanner();
        renderQuestions();
      }
    });

    $("#questionList").addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-study]");
      if (!button) return;
      openStudySheet(button.dataset.openStudy);
    });

    $("#generatePlan").addEventListener("click", generatePlanner);
    $("#weeklyPlan").addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-study]");
      if (button) openStudySheet(button.dataset.openStudy);
    });

    $("#studyClose").addEventListener("click", closeStudySheet);
    $("#studyOverlay").addEventListener("click", (event) => {
      if (event.target === event.currentTarget) closeStudySheet();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !$("#studyOverlay").hidden) closeStudySheet();
    });
    $("#studyStatus").addEventListener("change", (event) => {
      if (!activeStudyId) return;
      setQuestionStatus(activeStudyId, event.target.value);
      const refreshed = getQuestionState(activeStudyId);
      $("#studyRevision").value = refreshed.nextRevision;
      $("#studyRevisionLabel").textContent = refreshed.nextRevision ? `Next review: ${formatShortDate(refreshed.nextRevision)}` : "No review scheduled";
      refreshStudyViews();
    });
    $("#studyConfidence").addEventListener("change", (event) => {
      if (!activeStudyId) return;
      saveQuestionPatch(activeStudyId, { confidence: Number(event.target.value) });
      refreshStudyViews();
    });
    $("#studyBookmark").addEventListener("click", () => {
      if (!activeStudyId) return;
      const bookmarked = !getQuestionState(activeStudyId).bookmarked;
      saveQuestionPatch(activeStudyId, { bookmarked });
      $("#studyBookmark").classList.toggle("active", bookmarked);
      $("#studyBookmark").setAttribute("aria-pressed", String(bookmarked));
      $("#studyBookmark").textContent = bookmarked ? "★ Bookmarked" : "☆ Bookmark";
      refreshStudyViews();
    });
    $$('[data-study-approach]').forEach((checkbox) => checkbox.addEventListener("change", () => {
      if (!activeStudyId) return;
      const current = getQuestionState(activeStudyId);
      saveQuestionPatch(activeStudyId, { approach: { ...current.approach, [checkbox.dataset.studyApproach]: checkbox.checked } });
    }));
    [["#studyNotes", "notes"], ["#studyMistakes", "mistakes"], ["#studyCode", "code"]].forEach(([selector, field]) => {
      $(selector).addEventListener("input", (event) => {
        if (activeStudyId) saveQuestionPatch(activeStudyId, { [field]: event.target.value });
      });
    });
    $("#studyMistakeType").addEventListener("change", (event) => {
      if (!activeStudyId) return;
      saveQuestionPatch(activeStudyId, { mistakeType: event.target.value });
      refreshStudyViews();
    });
    $("#studyRevision").addEventListener("change", (event) => {
      if (!activeStudyId) return;
      saveQuestionPatch(activeStudyId, { nextRevision: event.target.value });
      $("#studyRevisionLabel").textContent = event.target.value ? `Next review: ${formatShortDate(event.target.value)}` : "No review scheduled";
      refreshStudyViews();
    });
    $("#reviewToday").addEventListener("click", () => {
      if (!activeStudyId) return;
      const questionState = getQuestionState(activeStudyId);
      const nextRevision = dateKey(addDays(new Date(), { 1: 3, 2: 7, 3: 14 }[Number(questionState.confidence)] || 3));
      saveQuestionPatch(activeStudyId, { status: "solved", lastReviewed: dateKey(), nextRevision });
      $("#studyStatus").value = "solved";
      $("#studyRevision").value = nextRevision;
      $("#studyRevisionLabel").textContent = `Next review: ${formatShortDate(nextRevision)}`;
      refreshStudyViews();
      showToast("Review logged and the next revision is scheduled.");
    });
    $("#studyPractice").addEventListener("click", () => {
      const question = questionById.get(activeStudyId);
      if (!question) return;
      setPracticeQuestion(question);
      closeStudySheet();
      renderQuestions();
      switchView("today");
      setTimeout(() => $("#practiceRoom").scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    });

    $("#promptList").addEventListener("click", (event) => {
      const button = event.target.closest("[data-prompt-id]");
      if (button) loadPrompt(button.dataset.promptId);
    });

    $$('[data-star-field]').forEach((field) => field.addEventListener("input", () => {
      state.stars[activePromptId] = state.stars[activePromptId] || {};
      state.stars[activePromptId][field.dataset.starField] = field.value;
      saveState();
      $("#starSaved").textContent = "Saved locally";
    }));

    $("#copyStar").addEventListener("click", async () => {
      const prompt = behavioralPrompts.find((item) => item.id === activePromptId);
      const notes = state.stars[activePromptId] || {};
      const outline = `${prompt.title}\n\nSituation: ${notes.situation || ""}\nTask: ${notes.task || ""}\nAction: ${notes.action || ""}\nResult: ${notes.result || ""}\nLearning: ${notes.learning || ""}`;
      try {
        await navigator.clipboard.writeText(outline);
        $("#copyStatus").textContent = "Answer outline copied.";
      } catch {
        $("#copyStatus").textContent = "Copy was blocked by the browser. Your notes are still saved.";
      }
    });

    $("#clearStar").addEventListener("click", () => {
      if (!window.confirm("Clear the notes for this answer?")) return;
      state.stars[activePromptId] = {};
      saveState();
      loadPrompt(activePromptId);
      $("#copyStatus").textContent = "Answer cleared.";
    });

    $("#coreGrid").addEventListener("click", (event) => {
      const button = event.target.closest("[data-core-toggle]");
      if (!button) return;
      const id = button.dataset.coreToggle;
      state.core[id] = !state.core[id];
      saveState();
      renderCore();
      showToast(state.core[id] ? "Revision card completed." : "Revision card reopened.");
    });

    $$('[data-score]').forEach((range) => range.addEventListener("input", updateMockAverage));
    $("#saveMock").addEventListener("click", () => {
      const scores = Object.fromEntries($$('[data-score]').map((range) => [range.dataset.score, Number(range.value)]));
      const average = Object.values(scores).reduce((sum, value) => sum + value, 0) / Object.values(scores).length;
      state.mocks.unshift({ date: new Date().toISOString(), scores, average, note: $("#mockNote").value.trim() });
      saveState();
      $("#mockNote").value = "";
      $("#mockSaveStatus").textContent = "Mock saved. Choose one improvement and use it in your next daily session.";
      renderMockHistory();
      updateStats();
    });

    $$('[data-checklist]').forEach((checkbox) => checkbox.addEventListener("change", () => {
      state.checklist[checkbox.dataset.checklist] = checkbox.checked;
      saveState();
    }));

    $("#resetProgress").addEventListener("click", () => {
      if (!window.confirm("Reset all saved questions, notes, planner, answers, mocks, and checklist progress on this device?")) return;
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    });
  }

  function init() {
    populateTopicFilter();
    updateLibraryIntro();
    setupToday();
    renderQuestions();
    renderModuleOverview();
    renderPlanner();
    renderPrompts();
    renderCore();
    renderMockHistory();
    restoreChecklist();
    updateMockAverage();
    updateStats();
    updateTimer();
    bindEvents();
    registerWebMcpTools();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
