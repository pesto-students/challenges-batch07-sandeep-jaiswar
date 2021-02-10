# Git Excercise insights

1. I created my first commit as initial commit and explored how it is linked and stored as tree with key-value pair model having key as commitId
2. `git cat-file -t <commit id> command gives which type of commit it is.
3. `git cat-file -p <commit id> command gives the detail of the commit which has tree,parent,author,commit message details.
4. git ls-files -s command shows the staging area...once first commit is done, it is never empty. if we run git reset then staging area uncommited files get rejected.
5.  git stash can be handful is half work is done and we have to switch to new branch for other task, we can use git stash apply/ git stash pop and get the stashed data back and continue the stuff
6. lightweight tag creates tag: tagname and points to the commit after which the branch is tagged.
7. annotated tag is same as lightweight tag but we give annotated msg here and it is known by that message.
8. merge creates a merger branch and add the files of both the branches,  we might encounter merge issues here i we are working in the same file.
9. we can use git log to get the logs and all the commit details
10. echo 'Hello, World!' | git hash-object --stdin gives us the hashed value of 'Hello, world!'
11. we can revert the last commit but a whole new branch gets created.