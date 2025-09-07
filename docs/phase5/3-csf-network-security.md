# Topic 3: Network Security

Network security in the cloud is about building secure connections, creating logical separations between resources, and defending against network-based threats. Before securing your Journal API's network, you need to understand cloud networking fundamentals.

## Learning Objectives

By the end of this topic, you will understand:

- Virtual Private Clouds (VPCs) and network isolation
- Security Groups vs Network ACLs and when to use each
- Load balancers and secure traffic management
- VPN and private connectivity options
- Common network security mistakes and how to avoid them

## Core Learning Resources

### 1. Read: Cloud Networking Fundamentals
Start with your cloud provider's networking documentation:

**AWS**: [VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) - Read sections on VPCs, subnets, and security groups
**Azure**: [Virtual Network Overview](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) - Read concepts and security features
**GCP**: [VPC Network Overview](https://cloud.google.com/vpc/docs/vpc) - Read VPC concepts and security

### 2. Watch: Network Security in Action
- [AWS VPC Deep Dive](https://www.youtube.com/watch?v=fnxXNZdf6ew) (45 minutes)
- [Azure Networking Explained](https://www.youtube.com/watch?v=5NMcM4zJPM4) (35 minutes)
- [GCP Networking Fundamentals](https://www.youtube.com/watch?v=cNb4xzAyTiQ) (40 minutes)

### 3. Learn: Network Security Best Practices
- [NIST Network Security Guide](https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final)
- [Cloud Security Alliance Network Security](https://cloudsecurityalliance.org/research/working-groups/network-security/)

## Key Concepts to Master

### Virtual Private Clouds (VPCs)
- **Isolation**: Your own private network in the cloud
- **Subnets**: Divide your VPC into smaller network segments
- **Route Tables**: Control where network traffic can go
- **Internet Gateways**: Allow internet access where needed

### Security Groups vs Network ACLs

**Security Groups** (Stateful):
- Act like firewalls for individual instances
- Allow rules only (deny by default)
- Stateful (return traffic automatically allowed)
- Apply at the instance level

**Network ACLs** (Stateless):
- Act like firewalls for entire subnets
- Allow and deny rules
- Stateless (must explicitly allow return traffic)
- Apply at the subnet level

### Network Segmentation
- **Public Subnets**: For resources that need internet access (load balancers)
- **Private Subnets**: For application servers and databases
- **Isolated Subnets**: For highly sensitive resources with no internet access

### Load Balancers and Traffic Management
- **Application Load Balancers**: Handle HTTP/HTTPS traffic with security features
- **Network Load Balancers**: Handle TCP/UDP traffic at high performance
- **Security Features**: SSL termination, DDoS protection, access logging

## Test Your Knowledge

Use an AI assistant to test your understanding. Here are example prompts:

1. "Quiz me on the difference between Security Groups and Network ACLs"
2. "Ask me to explain VPC concepts like subnets and route tables"
3. "Test my knowledge of when to use public vs private subnets"
4. "Quiz me on load balancer types and their security features"
5. "Ask me about network segmentation best practices"
6. "Test my understanding of stateful vs stateless firewalls"
7. "Quiz me on VPN types and when to use them"
8. "Ask me about common network security mistakes in the cloud"

## Physical vs Cloud Network Security

Understanding the differences helps bridge the conceptual gap:

| Physical Network Components | Cloud Equivalents | Key Differences |
|----------------------------|-------------------|-----------------|
| Physical routers and switches | Virtual routers, VPC gateways | Software-defined networking via console/API |
| Hardware firewalls | Security Groups, NACLs | Rules applied through cloud interfaces |
| Physical network segmentation | Subnets, VPCs, Security Groups | Logical boundaries replace physical ones |
| Network cables | Virtual connections, peering | No physical connections to manage |

## Additional Resources (Optional)

### Cloud Provider Documentation
- [AWS VPC Security Best Practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
- [Azure Network Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/network-best-practices)
- [GCP VPC Security](https://cloud.google.com/vpc/docs/using-vpc)

### Network Security Tools
- [AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/)
- [Azure Firewall](https://learn.microsoft.com/en-us/azure/firewall/)
- [GCP Cloud Firewall](https://cloud.google.com/firewall)

### Practice Resources
- [AWS VPC Workshop](https://catalog.workshops.aws/networking/en-US)
- [Azure Network Security Workshop](https://github.com/Azure/azure-network-security)

## Next Steps

Once you feel confident with network security concepts, move on to Topic 4. 
