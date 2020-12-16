# How to deploy articles on Hugo website hosted on GitHub
Create a ｀deploy.sh｀ script. Shell command should be activated by executing a ｀chmod +x deploy.sh｀ commmand.
The following are the contents of the ｀deploy.sh｀ script:
｀｀｀
#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master
｀｀｀
THe script can be run with a command ｀./deploy.sh｀.