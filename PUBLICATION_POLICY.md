# Public portfolio content policy

## Suitable for publication

- Generalized system architecture, conceptual topology, design trade-offs and engineering methodology.
- Technologies used, personally attributable roles and appropriately qualified technical experience.
- Generic equipment illustrations and properly attributed product-model reference photos.
- Test methodologies described without access details or site-specific operational data.

## Excluded from publication

- Passwords, API tokens, private keys, connection strings, session cookies or other authentication details.
- Real private IP addresses, hostnames, administrative endpoints, machine identifiers, device serial numbers and access paths.
- Customer, employee, supplier, or financial records and confidential correspondence.
- Actual firewall policies, current exploitable vulnerabilities, unredacted service configurations and as-built site infrastructure tied to an identifiable party.
- Material whose rights have not been cleared, or outcomes that have not been independently verified yet are presented as fact.

## Review checklist

Before committing: inspect the file, linked images, captions, SVG metadata, test data, code comments, attachment names and generated artifacts. Review changes with automated secret detection and manual editorial review. Generalized architecture can be illustrated; operational identifiers must not be published. A model-reference photo must never be represented as a photograph of a deployed unit.

If sensitive data is discovered, remove it from the current content, assess the full Git history and rotate any compromised credentials. Rewriting a branch alone does not guarantee removal from forks, pull-request references, caches or historical clones.
