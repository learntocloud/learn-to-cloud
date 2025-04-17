# Topic 2: Identity and Access Management (IAM)

<details>
<summary>Table of Contents</summary>

- [Study](#study)
- [Getting Started with IAM for Junior Engineers](#getting-started-with-iam-for-junior-engineers)
- [IAM Concepts](#iam-concepts)
- [Common IAM Security Issues to Avoid](#common-iam-security-issues-to-avoid)
- [Access Control Mechanisms](#access-control-mechanisms)
- [Test Your Knowledge](#test-your-knowledge)
- [Practical Exercise: Setting Up Basic IAM Controls](#practical-exercise-setting-up-basic-iam-controls)
- [Best Practices](#best-practices)
- [Labs (Free)](#labs-free)

</details>

IAM is your frontline defense when it comes to controlling who can access your cloud environment and what they can do once they're in. It's all about ensuring that only the right people have the right access, and doing it in a way that's both secure and streamlined.

## Study
- Understanding [IAM basics and concepts](https://csrc.nist.gov/projects/access-control-policy-and-implementation-guides)
- Learning about [Authentication vs. Authorization](https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization)
- Exploring [Multi-Factor Authentication](https://cloud.google.com/identity/solutions/implement-mfa) implementation
- Understanding [Role-Based Access Control](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) (RBAC)

## Getting Started with IAM for Junior Engineers

As a junior cloud engineer, IAM is one of the most important areas to master early:

1. **Start with the basics** - Create users, groups, and roles with appropriate permissions
2. **Understand service accounts** - Learn how applications and services authenticate to cloud resources
3. **Practice creating policies** - Begin with simple policies and gradually build complexity
4. **Learn IAM for your primary cloud provider first** - Each provider has different IAM implementations

### IAM Quick Reference

| Provider | Users/Groups | Policies/Roles | Service Accounts | Documentation |
|----------|--------------|----------------|-------------------|---------------|
| AWS | IAM Users and Groups | IAM Policies and Roles | IAM Roles for services | [AWS IAM Docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) |
| Azure | Azure AD Users and Groups | Role Assignments and Custom Roles | Managed Identities | [Azure RBAC Docs](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) |
| GCP | IAM Users and Groups | IAM Roles and Permissions | Service Accounts | [GCP IAM Docs](https://cloud.google.com/iam/docs/overview) |

## IAM Concepts

- **User Identity, Authentication, and Authorization:**  
    Your user identity isn't just a username or an email—it's the digital fingerprint that defines who you are within your cloud environment.
    
    - **Authentication:** This is the process of verifying that identity. Whether it's through passwords, biometric data, or security tokens, authentication makes sure that whoever is trying to get in is who they claim to be.
    - **Authorization:** Once authenticated, authorization determines what you're allowed to do. It's the mechanism that ensures a user only accesses the resources they're permitted to, reducing the risk of unwanted data exposure.
- **Multi-Factor Authentication (MFA) and Single Sign-On (SSO):**
    
    - **MFA:** Think of MFA as a double (or triple) lock on your door—it requires multiple forms of verification before granting access. This extra step can stop many attackers in their tracks.
    - **SSO:** On the flip side, SSO simplifies your life by letting users log in once and access multiple applications without repeated prompts, all while maintaining strong security controls.

## Common IAM Security Issues to Avoid

As a junior engineer, be aware of these frequent mistakes:

1. **Overly permissive policies** - Using policies that grant more access than needed
2. **Hardcoded credentials** - Embedding access keys in code or config files
3. **Orphaned accounts** - Leaving access for users who have left the organization
4. **Missing MFA** - Not enabling multi-factor authentication for privileged accounts
5. **Inadequate monitoring** - Not tracking who is accessing what resources

## Access Control Mechanisms

- **Role-Based Access Control (RBAC):**  
    RBAC assigns permissions based on a user's role within your organization. For instance, someone in finance shouldn't have the same access as someone in marketing. This helps ensure that every user only gets the access they absolutely need.
    
- **Attribute-Based Access Control (ABAC):**  
    ABAC takes things a step further by considering various attributes—like department, time of access, location, and even the sensitivity of the requested data—to make more granular access decisions. This flexible approach can adapt to complex, dynamic environments.
    
## Test Your Knowledge

Test your knowledge with an AI assistant. Here are some example prompts to test your understanding of Identity and Access Management:

1. What's the difference between authentication and authorization in cloud IAM?
2. How would you implement the principle of least privilege using IAM roles and policies?
3. Explain the concept of Role-Based Access Control (RBAC) and how it's used in cloud environments.
4. What are service accounts and why are they important for cloud security?
5. How would you handle temporary elevated access for emergency situations in a cloud environment?

## Practical Exercise: Setting Up Basic IAM Controls

### AWS:
1. Create an IAM group for developers with appropriate permissions
2. Add users to the group
3. Enable MFA for all users
4. Create a custom policy that follows least privilege

### Azure:
1. Create Azure AD groups for different departments
2. Assign built-in roles to these groups
3. Configure Conditional Access policies
4. Enable Azure AD Privileged Identity Management

### GCP:
1. Set up basic role bindings using predefined roles
2. Create custom roles for specific use cases
3. Configure service accounts with limited permissions
4. Set up IAM conditions based on resource attributes

## Best Practices

- **Regular Audits and Access Reviews:**  
    It's essential to routinely check who has access to what. This way, when someone changes roles or leaves the organization, you're not leaving any backdoors open.
    
- **Enforce the Principle of Least Privilege:**  
    Always grant the minimum level of access necessary for users to perform their tasks. This minimizes the risk of excessive permissions being exploited by a potential attacker.
    
- **Centralize Identity Management:**
    Use a central identity provider when possible to maintain consistent access controls across your organization.

- **Monitor IAM Changes:**
    Set up alerts for critical IAM modifications, especially for privileged accounts or roles.

By keeping these IAM fundamentals in mind and implementing robust controls, you ensure that your cloud environment remains secure and that access is granted only where it's truly needed.

## Labs (Free)

| Vendor       | Topic                                            | Link                                                                       |
| ------------ | ------------------------------------------------ | -------------------------------------------------------------------------- |
| AWS          | IAM Workshop                                     | https://catalog.workshops.aws/general-immersionday/en-US/basic-modules/30-iam |
| pwnedlabs.io | Intro to AWS IAM Enumeration                     | https://pwnedlabs.io/labs/intro-to-aws-iam-enumeration                     |
| pwnedlabs.io | Identify IAM Breaches with CloudTrail and Athena | https://pwnedlabs.io/labs/identify-iam-breaches-with-cloudtrail-and-athena |
| Microsoft    | Azure IAM Tutorials                              | https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-users-assign-role-azure-portal |