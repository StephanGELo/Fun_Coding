# Fun_Coding

## Enjoying solving 1 coding problem daily

### To see the sets of problems we practiced: Progress_Tracking.xlsx



| Resource |            Problem             | Level |  User   |    Date    |    Type    |                                                      Notes                                                           |
| :------: | :----------------------------: | :---: | :-----: | :--------: | :--------: | :----------------------------------------------------------------------------------------------------------------------: |
| LeetCode | See Progress_Tracking.xlsx |  |  |  |  |  |
| LeetCode |  |  |  |  |  |  |
| LeetCode |  |  |  |  |  |  |


## Syncing a forked repo with the upstream repo

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
