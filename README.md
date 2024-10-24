# Welcome

[![Azure Static Web Apps CI/CD](https://github.com/learntocloud/learn-to-cloud/actions/workflows/azure-static-web-apps-agreeable-forest-05e8c1b0f.yml/badge.svg?branch=main)](https://github.com/learntocloud/learn-to-cloud/actions/workflows/azure-static-web-apps-agreeable-forest-05e8c1b0f.yml)
[![CodeQL Code Scanning](https://github.com/learntocloud/learn-to-cloud/actions/workflows/codeql-code-scanning.yml/badge.svg)](https://github.com/learntocloud/learn-to-cloud/actions/workflows/codeql-code-scanning.yml)

## What is Learn to Cloud?

Learn to Cloud is a GUIDE (not a book or course) that originated from [this tweet](https://twitter.com/madebygps/status/1406258053427740672?lang=en). The goal is to provide an outline of skills you need to learn to get into Cloud Computing. At the end of it you should have the technical knowledge for roles like:

- System administrator.
- Cloud Support Engineer.
- Cloud Administrator.

## How to get started?

Our website is live [here](https://learntocloud.guide)


## Questions? Comments? Feedback?

Please open an [Issue](https://github.com/learntocloud/learn-to-cloud/issues)

## Roadmap

Take a look at our [backlog](https://github.com/orgs/learntocloud/projects/2) for a full list of proposed features (and known issues).

## Contributing

We have 2 areas for contribution:

### Engineering

We would love to be your first PR! or any PR for that matter. Take a look at our [backlog](https://github.com/orgs/learntocloud/projects/2) and comment on an issue you'd like to work on and we can get you started.

### Content

If you have ideas for updating the guide content, please open a PR and we would take a look at it.

## Docker Support

You can pull the public image from docker hub [rishabkumar7/ltc-website](https://hub.docker.com/r/rishabkumar7/ltc-website) or build it locally.

### Building the Docker Image:

To build the docker image you will need to run the following command:

``` bash
docker build --target <target> -t <tag> .
```

- `--target <target>` - This is the target to build. The target is the name of the stage in the dockerfile. Valid targets are `dev`, `serve` and `caddy`
- `-t <tag>` - This is the name and tag of the image that will be built. The format is <name>:<tag>. The name can be anything you want. The tag is optional. If you do not specify a tag, latest will be used.

- `.` - This is the path to the build context. In this case we are using the current directory (root directory of this project) as the build context.

### Running the Docker Image

To run the serve target you will need to run the following command:

``` bash
docker run --rm -d -p 3000:3000 <tag>
```

- `--rm` - This is an optional flag that will remove the container when it exits.
- `-d` - This is an optional flag that will run the container in detached mode.
- `-p 3000:3000` - This is an optional flag that will map port 3000 on the host to port 3000 in the container.
- `<tag>` - This is the name and tag of the image that will be run. Make sure to use the same tag that you used when building the image.

## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.
