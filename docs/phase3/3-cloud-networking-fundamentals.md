# Topic 3: Cloud Networking Fundamentals
On the previous topic you worked on deploying a VM in the cloud, using default configurations like the VPC, Security Groups etc. The focus on this phase is to deepen your understanding of cloud networking concepts essential for secure deployments.

- Study
    - Understanding [AWS VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html), [Azure VNet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview), and [GCP Virtual Private Network](https://cloud.google.com/vpc/docs/overview)
    - What is [Subnetting](https://audrey01.hashnode.dev/subnets-ip-addresses-ip-address-classes-cidr-blocks): Public vs. Private subnets, CIDR blocks.
    - Gateways (IGW, NAT, VPN) for secure internet access for [AWS](https://docs.aws.amazon.com/vpc/latest/userguide/extend-intro.html), [Azure](https://learn.microsoft.com/en-us/azure/nat-gateway/nat-overview?source=recommendations) and [GCP](https://cloud.google.com/nat/docs/overview)


## Test your knowledge
Once you are done with the provided resources, watch the [what is an IP Address](https://www.youtube.com/watch?v=5WfiTHiU4x8). Everything here should make sense to you, if not, you are not ready to move on.

Test your knowledge with an AI assistant, here are some example prompts to test your cloud networking concepts:

1. What is the purpose of Route Tables, and how do they impact network traffic?
2. How does a route table control the flow of traffic in a cloud network?
3. How does CIDR notation define IP address ranges in cloud networks?
4. How do public and private subnets differ, and when should each be used?
5. How does traffic flow between public and private subnets within a VPC?
6. What is the significance of the 0.0.0.0/0 route in a route table?
7. Explain the difference between NAT Gateway and Internet Gateway.

## Hands-on Task
- Set up a Cloud Network on any cloud provider.
- Create Two Subnets(Private and Public) within the set up cloud network.
- Configure Internet Access for proper routing.
- Associate subnets with appropriate route tables for controlled traffic flow
- Set up the Security group.
- Deploy a VM each within the Public Subnet and the Private Subnet of the created cloud network.

