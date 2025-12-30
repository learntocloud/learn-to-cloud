# Topic 7: Cloud Deployment Capstone

Deploy your Journal API from the Phase 2 Capstone to a secure 2-tier cloud architecture. This capstone challenges you to research, design, and implement a production-ready environment with proper networking and security.

## Challenge Overview

Create a secure 2-tier architecture:
- **Tier 1**: FastAPI application server (internet-accessible)
- **Tier 2**: PostgreSQL database server (private, secure)

## Learning Objectives

- Design secure cloud networking with public/private subnets
- Implement security groups following least privilege principles
- Configure remote database access securely
- Deploy a production-ready multi-tier application

## Prerequisites

- Completed Phase 2 Capstone (Journal API with AI analysis working locally)
- Cloud provider account with appropriate permissions
- SSH key pair for server access
- LLM API key from your chosen provider (OpenAI, Anthropic, Azure OpenAI, AWS Bedrock, or GCP Vertex AI)

## Your Mission

### 1. Design Your Architecture

Research and plan your cloud infrastructure:
- How will you separate public and private resources?
- What networking components do you need?
- How will you secure communication between tiers?

### 2. Deploy the API Server

Set up your application server in the public tier:
- Choose appropriate compute resources
- Deploy your Journal API application
- Configure secure access and networking

### 3. Deploy the Database Server

Set up PostgreSQL in the private tier:
- Ensure it's not directly accessible from the internet
- Configure it to accept connections from your API server
- Implement proper security measures

### 4. Test Your Deployment

Validate your architecture:
- All API endpoints work correctly
- Database is properly secured
- Data persists between restarts

## Success Criteria

Your deployment succeeds when you can demonstrate:

- ✅ API accessible from the internet
- ✅ Database only accessible from API server (not internet)
- ✅ All CRUD operations work via API endpoints
- ✅ AI analysis endpoint (`/entries/{id}/analyze`) returns sentiment and summary
- ✅ LLM API key stored securely (environment variable, not in code)
- ✅ Data persists between server restarts
- ✅ Security follows least privilege principles

## Document Your Learning

Create a technical writeup covering:
- Your architecture design and reasoning
- Security decisions and trade-offs
- Challenges encountered and solutions
- Key learnings about cloud deployment

Share your progress in the cloud phase Discord channel!

## Remember

This is about understanding cloud patterns, not following a recipe. Research, experiment, and learn from the journey. Every cloud provider has different tools - figure out what works best for your chosen platform.