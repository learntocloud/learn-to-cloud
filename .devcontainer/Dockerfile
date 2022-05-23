# [Choice] Node.js version: 18, 16, 14
ARG VARIANT=16
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}


ARG USERNAME=node


# [Optional] Uncomment this section to install additional OS packages.
 RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
     && su node -c "npm install -g docsify-cli@latest"
