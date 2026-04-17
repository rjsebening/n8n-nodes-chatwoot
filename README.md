# @rjsebening/n8n-nodes-chatwoot

![n8n Community Node](https://img.shields.io/badge/n8n-community--node-FF6D5A)
![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

### n8n Integration for **Chatwoot – the open-source customer engagement platform**

Automate conversations, contacts, agents, and inbox workflows, react to real-time webhook events, and keep your support pipeline moving — **without manual work**.

## 🧭 Overview

This community node connects **Chatwoot** seamlessly with your n8n workflows.
From contact management and conversation routing to platform-level administration and real-time triggers — automate every key support process end-to-end.

It covers all three Chatwoot API surfaces (Application, Platform, Client) plus a webhook trigger — so whether you're running a self-hosted instance or Chatwoot Cloud, you can wire it into any n8n automation.

---

## 📦 Installation

### Requirements

- n8n version **2.0.0 or higher**
- A running Chatwoot instance (self-hosted or Cloud) with a valid API access token

### Community Node Installation

1. Open n8n → **Settings → Community Nodes → Install**
2. Enter package name:

```
@rjsebening/n8n-nodes-chatwoot
```

3. **Restart n8n** – the nodes will now appear in the node panel.

---

## 🔌 Included Nodes

| Node                    | Purpose                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------- |
| **Chatwoot Application** | Access the Application API (v1) — contacts, conversations, messages, agents, inboxes, teams, labels, automations, reports, and more |
| **Chatwoot Platform**    | Access the Platform API — manage accounts, account users, agent bots, and users across an instance |
| **Chatwoot Client**      | Access the Client API — contact-facing endpoints (inbox, conversations, messages, CSAT) using the `identifier` / `source_id` model |
| **Chatwoot Trigger**     | Receive real-time events from Chatwoot webhooks (new messages, conversation updates, contact changes, etc.) |

### 🔐 Credentials

Three credential types are provided, matching the three API surfaces:

- **Chatwoot Application API** — uses a user access token (`api_access_token`)
- **Chatwoot Platform API** — uses a platform app access token
- **Chatwoot Client API** — uses an inbox identifier + contact source/identifier for customer-facing flows

Each credential stores the base URL of your Chatwoot instance (e.g. `https://app.chatwoot.com` or your self-hosted URL).

---

## 🧩 Supported Resources

**Application API**: Account, Account Agent Bots, Agents, Audit Logs, Automation Rules, Canned Responses, Contacts, Contact Labels, Conversations, Conversation Assignments, Custom Attributes, Custom Filters, Help Center, Inboxes, Integrations, Labels, Messages, Profile, Reports, Teams, Webhooks.

**Platform API**: Accounts, Account Users, Agent Bots, Users.

**Client API**: Contacts, Conversations, Inbox, Messages, CSAT Survey Page.

---

## 📬 About the Author

I’m **[Rezk Jörg Sebening](https://github.com/rjsebening)** – Automation & Systems Expert (DACH).
I build n8n nodes and process automation systems that help agencies, coaches, and service providers scale **without manual work**.

👉 Follow me on GitHub for new DACH integrations and automation templates.

## ⚖️ Legal Disclaimer

This community node is **not affiliated with Chatwoot Inc.** (no partnership, no sponsorship, no official endorsement).
It simply connects to publicly available Chatwoot API endpoints.

- Community developed & maintained
- For API-related issues → contact **Chatwoot Support** or consult the [Chatwoot API docs](https://www.chatwoot.com/developers/api/)
- All trademarks & logos belong to their respective owners

## 📄 License

**MIT License**
Contributions and pull requests are welcome!
