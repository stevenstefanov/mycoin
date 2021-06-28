# Project Development Guide


## GIT COMMITS/PUSH

``` 
** Follow this pattern while naming a new branch
    feature-[branchName] --> feature-server

** To Check the branch you are currently inside of
$ git branch 

** Before starting working on your task, create a new branch 
$ git checkout -b feature-[branchName]

** Swtich between branches 
$ git checkout main 
OR 
$ git checkout feature[branchName]

** Delete a feature branch 
$ git branch -d feature[branchName]
``` 

``` 
** IMPORTANT **

** Alaways push the changes to your feature branch 
** So make sure you are inside your feature branch, before the following steps

$ git status 
$ git add .
$ git commit -m "message"
$ git push origin feature-[branchName]

PS: Check status if needed, otherwise just add, commit and push

** Next, create a pull request after you pushed to GitHub
** Once someone approved (after reviewing) and mergerd to the main 
** On your terminal, switch to your main branch and pull the new (merged) changes 
** Then delete your feature branch 

** ALWAYS remember to approve pull requests from the oldest created pull requests
** That way there would be less conflict 
```


## MVP 


## Future Development