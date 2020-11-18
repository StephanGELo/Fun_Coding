# Fun_Coding

Enjoying solving 1 coding problem daily

|           Problem           | Level |    Date    | Type  |         Notes         | #5  | #6  | #7  |
| :-------------------------: | :---: | :--------: | :---: | :-------------------: | :-: | :-: | :-: |
| Leetcode Problem 1. Two Sum | Easy  | 2020/11/17 | Array | Succeed in completing | 285 | 287 | 287 |
|                             |       |  2020/11/  |       |                       |     |     |     |
|                             |       |  2020/11/  |       |                       |     |     |     |
|                             |       |  2020/11/  |       |                       |     |     |     |
|                             |       |  2020/11/  |       |                       |     |     |     |
|                             |       |  2020/11/  |       |                       |     |     |     |
|                             |       |  2020/11/  |       |                       |     |     |     |

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
