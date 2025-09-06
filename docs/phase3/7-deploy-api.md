# Topic 7: Cloud Deployment Capstone

Deploy your Journal API from the Phase 2 Capstone to a secure 2-tier cloud architecture. You'll create a production-ready environment with proper networking, security, and scalability considerations.

## Architecture Overview

You'll deploy:

- Tier 1 (Presentation/API): FastAPI application server in a public subnet
- Tier 2 (Data): PostgreSQL database server in a private subnet
- Security: Properly configured network access controls and security groups

## Learning Objectives

By completing this capstone, you will:

- Design and implement secure cloud networking with public/private subnets
- Configure security groups with the principle of least privilege
- Set up database servers with secure remote access
- Deploy and configure a multi-tier application architecture
- Implement proper environment configuration for production deployments

## Prerequisites

- Completed Phase 2 Capstone (Journal API)
- Basic understanding of networking concepts (subnets, security groups, gateways)
- Cloud provider account (AWS/Azure/GCP) with appropriate permissions
- SSH key pair for secure server access

## Deployment Steps

### 1. Plan Your Cloud Infrastructure

#### Research and Design:

- Study your cloud provider's networking documentation
- Understand the differences between public and private subnets
- Learn about security groups and network ACLs
- Plan your IP address ranges (consider future scaling)

#### Infrastructure Components to Create:

- Virtual network (VPC/VNet) with appropriate CIDR block
- Public subnet for the API server (internet-accessible)
- Private subnet for the database server (internal access only)
- Internet gateway for public subnet connectivity
- NAT gateway/instance for private subnet outbound access
- Route tables and routing configuration
- Security groups for both tiers

#### Security Considerations:

API server should only accept HTTP/HTTPS traffic from the internet
Database server should only accept connections from the API server
SSH access should be restricted to your IP address
Consider using cloud-native secure access solutions (AWS SSM, Azure Bastion, etc.)

### 2. Deploy and Configure the API Server

#### Server Setup:

- Launch a VM in the public subnet with appropriate sizing
- Configure SSH key-based authentication
- Install required dependencies (Python, Git, etc.)
- Set up a process manager (systemd, supervisor) for production deployment

#### Application Deployment:

- Clone your journal-starter repository
- Install Python dependencies from requirements.txt
- Configure production environment variables
- Test the application locally before exposing it
- Environment Configuration: Your .env file should include:

#### Networking:

Assign a static/elastic IP address for consistent access
Configure the security group to allow HTTP (port 80) and/or HTTPS (port 443)
Optionally set up a reverse proxy (nginx) for production best practices

### 3. Deploy and Configure the Database Server

#### Server Setup:

- Launch a VM in the private subnet
- Ensure the server can access the internet for package installation (via NAT)
- Configure secure remote access using cloud-native tools

#### PostgreSQL Installation and Configuration:

- Install PostgreSQL server
- Create the application database and user
- Configure PostgreSQL to accept remote connections
- Modify configuration files (postgresql.conf, pg_hba.conf)
- Set up the database schema using the provided database_setup.sql

#### Security Hardening:

- Configure firewall rules to only allow connections from the API server
- Use strong passwords and consider certificate-based authentication
- Regularly update the server and database software
- Configure automated backups

### 4. Test and Validate Your Deployment

#### Connectivity Testing:

- Verify the API server can reach the database server
- Confirm the database server cannot be accessed directly from the internet
- Test SSH access to both servers

#### Application Testing:

Use the API documentation interface (http://your-elastic-ip:8000/docs)

Test all CRUD operations:

- Create new journal entries
- Retrieve all entries
- Retrieve single entries by ID
- Update existing entries
- Delete entries


## Document your work

Write a technical blog with:

- Architecture diagram showing your network design
- Security group configurations and justifications
- Screenshots of successful API testing
- Brief explanation of design decisions and trade-offs
- List of any challenges encountered and how you resolved them

Share in the cloud phase channel on discord when done.

## Success Criteria

Your deployment is successful when:

- ✅ API is accessible from the internet via elastic IP
- ✅ Database is only accessible from the API server
- ✅ All API endpoints function correctly
- ✅ Data persists between server restarts
- ✅ Security groups follow the principle of least privilege
- ✅ You can explain your architecture decisions

Remember: This capstone is about understanding cloud deployment patterns, not just following instructions. Research, experiment, and learn from any mistakes you encounter along the way!