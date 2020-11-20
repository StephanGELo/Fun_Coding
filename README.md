#Fun_Coding

Enjoying solving 1 coding problem daily


| Resource |            Problem             | Level |  User   |    Date    |    Type    |                                                          Notes                                                           |
| :------: | :----------------------------: | :---: | :-----: | :--------: | :--------: | :----------------------------------------------------------------------------------------------------------------------: |
| Leetcode |           1. Two Sum           | Easy  |  Anna   | 2020/11/17 |   Array    | Succeed in completing                                                   |
| Leetcode |           1. Two Sum           | Easy  | Stephan | 2020/11/17 |   Array    | Succeed in completing                                                   |
| LeetCode |    206. Reverse Linked List    | Easy  |  Anna   | 2020/11/18 | LinkedList | Completed in 27min                                                    |
| LeetCode |    206. Reverse Linked List    | Easy  | Stephan | 2020/11/18 | LinkedList |
| LeetCode | 937. Reorder Data in Log Files | Easy  |  Anna   | 2020/11/20 | String | Incomplete |
| LeetCode | 937. Reorder Data in Log Files | Easy  | Stephan | 2020/11/20 | String | Completed. Good reference: [Sort an Array of objects](https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/) |
| LeetCode |  | Easy  |  Anna   |  2020/11/  |  |  |                                                                                                                        |
| LeetCode |  | Easy  | Stephan |  2020/11/  |  |  |
| LeetCode |  | Easy | Anna | 2020/11/ |  |  |
| LeetCode |  | Easy | Stephan | 2020/11/ |  |  |


# Syncing a forked repo with the upstream repo

Follow this link to [fork a repo from upstream](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) and this link to [sync a forked repo from upstream](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

In summary,

```
    $ git remote -v
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)

```

```
    $ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPO.git

```

```
    $ git remote -v
    $ git fetch upstream
    $ git checkout main
    $ git merge upstream/main
```
