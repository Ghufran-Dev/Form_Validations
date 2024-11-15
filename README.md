- create repo in github
- git init
- git remote add origin ssh link

# Branch
- git branch -a           => (to see all branches)
- git remote -v
- git branch branchName  => (to create local branch)
- git checkout branchName =>  (to switch branch)

# Push
- git push origin master => (according to the branch)

# Deleting a remote branch
git push origin --delete <branch>
git push origin -d <branch>

# Deleting a local branch
git branch -d <branch>
git branch -D <branch>  force-delete

# Deleting a local remote-tracking branch
git branch -dr <remote>/<branch>
git fetch <remote -p>   delete multiple obsolete remote-tracking branches

