# Paper 2/3 — Catalysis: A Research Deep-Dive on SSNs

https://paragraph.com/@tokensightxyz/catalysis-ssn-deep-dive

![Image 21-06-2025 at 22.07.jpeg](Paper%202%203%20%E2%80%94%20Catalysis%20A%20Research%20Deep-Dive%20on%20SSNs%2021b8c8013d32802ab560ebf922db7bfa/Image_21-06-2025_at_22.07.jpeg)

- Thread @Yanshu Yadav
    
    **1st Tweet**
    
    **Catalysis: A Research Deep-Dive**
    
    *Shared Security Networks*
    
    We are releasing the second piece on our 3-part research series on @0xcatalysis: a deep-dive on Shared Security Networks, covering security, SSP selection, equilibrium, and slashing risk!
    
    ![Image 21-06-2025 at 22.07.jpeg](Paper%202%203%20%E2%80%94%20Catalysis%20A%20Research%20Deep-Dive%20on%20SSNs%2021b8c8013d32802ab560ebf922db7bfa/Image_21-06-2025_at_22.07.jpeg)
    
    **2nd Tweet**
    
    We examine how Catalysis reshapes Shared Security Networks (SSN) security and economics by:
    
    → **Elevating the cost of coordinated corruption and dropping the cost of security acquisition**
    
    → **Enabling probabilistic SSP stake sourcing via utility-based equilibria**
    
    → **Studying Localized vs. Correlated Slashing Modes**
    
    → **Highlighting the crucial role of curation in rebalancing decision optimization** 
    
    **3rd Tweet**
    
    Stay tuned for our upcoming third research piece deep-diving on SSPs as insurance providers within the Catalysis marketplace!
    
    https://paragraph.com/@tokensightxyz/a-primer-on-catalysis
    

# Catalysis: A Research Deep-Dive

## Shared Security Networks

### Index

1. **Abstract**
2. **Catalysis Overview on SSNs: Article Recap**
    1. Aggregated Security Through Unified Abstraction
    2. Key Benefits to SSNs
    3. Reframing the SSN Security Stack
    4. Economic & Game-Theoretic Flows
3. **SSN Cryptoeconomic Security**
    1. The Four Kinds of Security Costs
    2. Reducing the Cost of Security Acquisition
    3. Raising the Cost of Corruption
4. **Finding Equilibrium in SSP Allocations**
    1. Modelling SSN-to-SSP Allocations Based on Perceived Utility, via QRE
    2. Calculating SSN-to-SSP Allocations Based Required Target Stake
    3. Additional Target Stake Considerations
5. **Localized vs. Correlated SSN Slashing Modes**
    1. Localized Slashing
    2. Correlated Slashing
    3. Modelling Localized & Correlated Slashing Modes
    4. Calculating Localized & Correlated Slashing Modes
6. **Catalysis Rebalancing Feedback Engine**
7. **Conclusion**

*Note: The term “Shared Security Networks” will be used herein to represent the networks/services (AVSs, Networks, BSNs, etc.) that leverage restaked collateral to validate their infrastructure needs. And the term “Shared Security Protocols” will be used herein to represent the restaking marketplaces (EigenLayer, Symbiotic, Babylon, SatLayer, etc.) that aggregate this demand and supply security and validation to Shared Security Networks.*

# **Abstract [wip]**

Catalysis is the first Security Abstraction Layer that unlocks unified access to $20B+ of ETH, BTC & SOL economic security for institutions & developers to tap into. It introduces a modular and programmable coordination layer for Shared Security Networks (SSNs), enabling them to flexibly source, rebalance, and optimize economic security across multiple restaking ecosystems.

Rather than anchoring SSNs to a single protocol, Catalysis aggregates validator sets, standardizes slashing semantics, and surfaces utility signals to guide stake allocation based on risk and yield tradeoffs. This paper presents a stake allocation simulation illustrating how utility asymmetries and correlated exposures create systemic inefficiencies, and how Catalysis enables SSNs to converge toward allocation equilibrium across SSPs through real-time routing and dynamic feedback. It concludes by formalizing two core slashing modes—localized and correlated—and modeling how their containment or propagation depends on system architecture.

# **Catalysis Overview on SSNs: Article Recap**

## Aggregated Security Through Unified Abstraction

Shared Security Networks (SSNs) such as Omni, Redstone, Cap, Ditto Network, and Hyperlane are progressively integrating with multiple Shared Security Protocols (SSPs)—including EigenLayer, Symbiotic, and SatLayer—to enhance their economic security base. This multi-platform restaking strategy adds distinct trust domains, increasing security robustness. However, it also introduces complexity: validator sets, slashing semantics, fault adjudication, and delegation infrastructure vary widely across SSPs.

Catalysis abstracts this fragmentation through a unified interface. Instead of integrating with each SSP individually, SSNs can source restaked security through a single validator set and programmable slashing layer. Such modular structure **allows SSNs to retain uptime and security continuity**, even when one or more SSPs experience validator degradation, slashing events, or yield volatility.

![Expanded Catalysis Workflow](https://storage.googleapis.com/papyrus_images/8530e0c3f929ec7b57604cc004410c8d.png)

Expanded Catalysis Workflow

## Key Benefits to SSNs

Catalysis introduces structural flexibility to SSN design and operations, allowing SSNs to function as modular market participants within a programmable security economy. It enables cross-platform validator coordination, customizable slashing semantics, and partial execution across SSPs—maximizing security configurability and fault isolation.

- **Unified Integration & Validator Abstraction**
    
    A single Catalyst SDK layer handles integration across all supported SSPs. Validator management is abstracted, enabling cross-SSP coordination while customizing slashing logic and failure domains—reducing launch time and complexity for new SSNs;
    
- **Dynamic Stake & Risk-Aware Rebalancing**
    
    Stake allocation adapts in real-time to operator performance, pricing, and slashing history. SSNs can proactively or reactively shift stake across SSPs to isolate faults, mitigate underperformance, and improve capital efficiency;
    
- **Programmable Reward Distribution**
    
    Rewards are routed directly across SSPs without cross-chain wrappers or bridges, minimizing slippage, simplifies flow logic, and reduces fragmentation by consolidating delegation, slashing, and payout mechanisms;
    
- **Partial Execution & Custom Trust Models**
    
    SSNs can selectively deploy logic across multiple SSPs, enabling hybrid trust models and fault-resilient execution. This facilitates experimentation with differentiated validator trust configurations;
    
- **Market-Based SSP Selection**
    
    Aggregated demand across SSNs pressures SSPs to compete on validator quality, uptime, slashing guarantees, and reward rates—aligning infrastructure incentives with AVS security needs;
    
- **Developer Flexibility**
    
    All security primitives are programmable via Catalysis, allowing developers to iterate on incentive structures and core business logic, automate strategy rebalancing, and integrate without bespoke infrastructure overhead.
    

## Reframing the SSN Security Stack

As SSNs evaluate integration with Catalysis, three critical questions emerge—each of which the system explicitly addresses:

1. ***How much economic security is required?***
    
    SSNs must consider potential corruption profit based on their set-up and how much cost (economic security) would be sufficient to deter an attack. Read more on the topic on [**our newly-released piece on Target Stake with Symbiotic**](https://paragraph.com/@tokensightxyz/modeling-target-stake-requirements).
    
    Catalysis reframes this question further with a deeper second-order one:
    
    > *Which sources of cryptoeconomic security (ETH from EigenLayer and Symbiotic, BTC from Babylon and SatLayer, BNB from Kernel, etc.) does an SSN need and wants align itself with?*
    > 
2. ***What is the cost of acquiring and maintaining that security?***
    
    Catalysis exposes a unified fee and reward benchmarking layer across SSPs, enabling SSNs to optimize for the lowest-cost, highest-resilience combinations. SSNs can minimize validator acquisition costs, streamline restaker onboarding, and amortize security costs across multiple use cases.
    
3. ***What fault conditions govern validator behavior?***
    
    SSNs must specify what constitutes slashing-worthy behavior and how faults are processed. Catalysis makes this logic programmable—enabling fault adjudication and penalty enforcement across SSPs through one cohesive slashing engine. Thus ensuring validator accountability is not lost in cross-platform complexity.
    

## **Economic and Game-Theoretic Flows**

In essence, Catalysis creates a two-sided SSN marketplace: SSNs compete for reliable security, while SSPs and Operators compete for SSN onboarding.

Assuming the structural advantages introduced by Catalysis play out as expected, a broader set of SSNs would likely enter the system—**driving up aggregate demand** for restaked capital. This flywheel creates **upward pressure on rewards** for delegators (via LRTs or direct restakers), incentivizing greater participation and TVL growth. At the same time, increased SSN competition drives demand for high-performing validators, prompting operators to compete on uptime, reliability, and responsiveness.

From a cost-efficiency standpoint, Catalysis introduces a competitive restaking marketplace. SSNs can **compare pricing** across SSPs and allocate stake where security is cheapest and most stable. This drives **downward pressure on security costs** as SSPs compete for SSN onboarding and encourages them to improve internal economics and UX.

SSNs also gain more malleability to consider SSPs’ **TVL stickiness**—how durable and reactive each SSP’s capital base is under slashing, volatility, or adverse events. Those with more consistent capital retention will be perceived as more reliable security sources.

By concentrating demand and standardizing the security procurement process, Catalysis enhances the **buying power** of SSNs. SSPs are incentivized to compete not just on integration availability, but on economic efficiency, validator quality, and fault tolerance. In this way, Catalysis transforms restaking from a fragmented infrastructure layer into a coordinated, efficient security marketplace.

# **SSN Cryptoeconomic Security**

## The Four Types of Security Costs

SSNs incur four core categories of security-related expenses. Catalysis mitigates cost pressure across each through abstraction, routing optimization, and shared infrastructure:

1. **Delegator Rewards**: Continuous payouts to restakers and LRT holders who supply economic security.
    
    **→ Higher security demand requires elevated yields to attract stake**, particularly in competitive environments where AVSs must signal safety.
    
2. **Security Rental from SSPs**: Although not fully standardized today, future SSPs may charge usage fees (e.g., Symbiotic 3%, EigenLayer 4.5%).
    
    **→ Catalysis enables price discovery and blended sourcing** across protocols, minimizing net cost per unit of security.
    
3. **Task Execution Fees**: Validators are compensated for protocol-specific services. 
    
    **→ Competitive validator markets lower long-run execution pricing**, compressing recurring operating costs.
    
4. **Protocol Development & Security Overhead**: Tooling, audits, and DevOps are required to onboard and secure SSNs.
    
    **→ Catalysis reduces this burden** via a unified SDK and standardized validator and slashing logic across SSPs.
    

## Reducing the Cost of Security Acquisition

Catalysis reduces security acquisition costs by abstracting validator infrastructure, eliminating duplicative onboarding, and enabling price discovery and dynamic stake routing across SSPs.

- **Unified Security Infrastructure**: Validators are aggregated across SSPs, letting SSNs **onboard once to access pooled security**
    
    **→ Reduces onboarding friction** and improves validator reward saturation by consolidating demand.
    
- **Dynamically-Optimized Stake Allocation**: Stake flows to SSPs offering optimal tradeoffs between risk, yield, and validator quality.
    
    **→ Avoids degraded providers**, lowers capital inefficiency, and better aligns with each SSN’s Target Stake.
    
- **Reward Efficiency and Routing**: Rewards are natively routed across SSPs without wrappers or bridges.
    
    **→ Cuts gas costs and slippage**, simplifying integration logic.
    
- **System-Level Cost Compression**: Aggregated SSN demand creates **buy-side bargaining power**.
    
    **→ Improves validator pricing** and amortizes fixed infra costs across a broader base.
    
- **Feedback-Driven Delegation Logic**: Stake rebalances dynamically in response to performance, slashing, or curator signals.
    
    **→ Stake reallocates in real-time**, optimizing for current risk-reward landscapes.
    
- **Validator Reuse Across SSNs**: Validators serving multiple SSNs operate under shared infrastructure.
    
    **→ Avoids re-registration and stake fragmentation**, unlocking capital efficiency and reducing idle capacity.
    

## Raising the Cost of Corruption

Catalysis materially increases the **Cost of Corruption (CoC)** by aggregating security and aligning incentives across SSNs. Whereas traditional architectures enable isolated validator compromise, Catalysis enforces interdependency and accountability at scale.

- **Aggregated Security Layer**: Restaked capital from multiple SSPs is unified under a single slashing abstraction.
    
    **→ Tens of billions in economic security are pooled**, making coordinated exploits prohibitively expensive.
    
- **Differentiated Validator Sets Per SSP**: Validators are coordinated via Catalysis but form distinct sets per SSP.
    
    **→ Attacks must breach multiple operator sets simultaneously**, raising both complexity and cost of coordinated corruption.
    
- **Higher Stake at Risk per Attack**: Corruption attempts now expose **more total stake** per validator action.
    
    **→ Amplifies slashing losses**, increasing the minimum profitable attack threshold.
    
- **Reputational and Long-Term Opportunities**: Well-behaved validators gain stronger reputation and opportunities across all integrated and upcoming SSNs.
    
    **→** Creates a **more feedback-driven, transparent flywheel** for operator selection.
    
- **Cross-SSN Risk Propagation Awareness**: Catalysis exposes correlation risks across SSNs via shared validator metadata.
    
    **→ Enables proactive delegation modeling**, deterring systemic exploits by surfacing propagation vectors.
    

# **Finding Equilibrium in SSP Allocations**

Restaking introduces uncertainty, partial observability, and multidimensional risk tradeoffs that invalidate key assumptions of standard game-theoretic models. In particular, traditional [**Nash Equilibrium**](https://www.geeksforgeeks.org/machine-learning/nash-equilibrium/) assumes fully rational agents with complete information, selecting strategies that maximize utility deterministically. In restaking environments this model breaks down as participants operate under noisy incentive signals, hidden risks, incomplete slashing semantics, and evolving market conditions. Nash equilibrium also fails to account for coordination frictions, feedback loops, and multi-reward routing that shape actual SSN behavior.

By contrast, [**Quantal Response Equilibrium (QRE)**](https://www.numberanalytics.com/blog/quantal-response-equilibrium-game-theory) models decision-making under bounded rationality. Agents do not always select the utility-maximizing action; instead, they assign probabilities to each action via a softmax function over perceived utility. This methodology captures realistic agent behavior: higher-utility SSPs are more likely to attract stake, but suboptimal ones may still receive allocations due to noise, misperception, or hedging. QRE accommodates stochastic dynamics, informational asymmetries, and incentive gradients—core features of restaking ecosystems.

In Catalysis, QRE offers a more robust equilibrium model. Stake does not flow deterministically to the highest-yield SSP. Instead, allocations diffuse across SSPs proportional to their slashing-adjusted utility. **At equilibrium, each SSP attracts stake such that no SSN—given its subjective utility estimates and rationality bounds—has incentive to reallocate.** The framework enables smoother rebalancing, reduces concentration risk, and aligns with real-world delegation behavior shaped by asymmetric risk-reward signals.

## Modelling SSN-to-SSP Allocations Based on Perceived Utility, via QRE

This section models how SSNs allocate stake across SSPs using the **QRE** framework. It highlights how allocations evolve from noisy, misaligned states toward probabilistic equilibrium as SSNs refine their utility assessments.

At the core is the utility function:

$$
\text{Utility}_{SSP_j}^{SSN_i} = \mathbb{E}[\text{Return}_{SSP_j}] - \mathbb{E}[\text{Cost}_{SSP_j}] - \mathbb{E}[\text{Risk}_{SSP_j}]
$$

where:

- $\text{Utility}_{SSP_j}^{SSN_i}$: Net expected value perceived by an SSN when allocating stake to a given SSP, accounting for the tradeoff between returns, costs, and risks under constrained rationality;
    - $\mathbb{E}[\text{Return}_{SSP_j}]$ reflects expected rewards, incentives or yield that the SSN earns from $SSP_j$;
    - $\mathbb{E}[\text{Cost}_{SSP_j}]$ captures operational and opportunity costs of sourcing security from $SSP_j$;
    - $\mathbb{E}[\text{Risk}_{SSP_j}]$ represents direct and correlated slashing exposures based on SSP risk profile, validator and LRT portfolios overlap, collateral quality, and historical behavior. More on SSP risk evaluation at [*Restaking Protocols Infra Risk Framework V2*](https://paragraph.com/@tokensightxyz/restaking-protocols-infra-risk-framework-v2).

### **QRE Interpretation: Perceived Utility**

Since SSNs operate under incomplete information and rationality, they don’t source capital deterministically. Instead, they **convert raw utility into probabilistic preferences** via the softmax formulation:

$$
U'_{SSP_j} = \frac{e^{\lambda \cdot \text{Utility}_{SSP_j}}}{\sum_k e^{\lambda \cdot \text{Utility}_{SSP_k}}}
$$

- **Rationality (λ)** scales how strongly agents react to utility differences when allocating probabilistically across options:
    - **Low λ → Bounded Rationality / High Noise:** SSNs behave erratically, weakly preferring high-utility SSPs; randomness dominates;
    - **High λ → Deterministic Behavior:** SSNs sharply favor SSPs with higher perceived utility; probabilistic error shrinks;
- **Perceived Utility ( $U’_{SSP_j}$)** reflects this interplay—blending observed utility and the SSN’s current rationality level.

![](https://storage.googleapis.com/papyrus_images/7f665a1def5cbd0696d6706d1776eafc.jpg)

At **time $t_1$** (non-equilibrium), SSNs' allocations are uncoordinated and near-random. SSNs disproportionately allocate to SSPs with higher apparent rewards, stronger brand recognition, or inertia, regardless of underlying risk exposure.

At **time $t_2$** (near-equilibrium), **Catalysis introduces risk and incentive feedback**, nudging the system toward equilibrium. SSNs rebalance based on perceived utility gradients that incorporate slashing likelihood, validator-set quality, historical uptime, reward rates, and other metrics. Stake begins to redistribute probabilistically toward more defensible SSPs, even if they weren't initially preferred.

This is visualized in the utility response curves:

- **SSP1’s curve rises** steeply as SSNs recognize its superior risk-adjusted return profile;
- **SSP2’s curve dips**, reflecting reassessed risk due to previously hidden risk or reward downsides;
- **SSP3**, initially undervalued, gains traction under higher $\lambda$, as latent utility is revealed through rational inference.

A key inflection occurs around $\lambda$ **= 4**: SSNs transition from misinformed and erratic behavior to grounded preference formation. Rationality begins to meaningfully differentiate between SSPs. Catalysis and risk advisors' feedback and insights play a pivotal role in this shift.

By $\lambda$ **= 9**, SSNs express nearly full discernment, allocating in line with refined perceptions of utility. Stake flows align tightly with risk-adjusted rewards and utility.

Ultimately, Catalysis does not enforce uniform distribution. It offers transparency and steers the system toward a **stable probabilistic equilibrium**, where stake is allocated in line with relative perceived utility—and no SSN finds further reallocation rational, given available information and risk.

## Calculating SSN-to-SSP Allocations Based Required Target Stake

Unlike standard minimax approaches that solely consider worst-case slashing risk and overlook key tradeoffs, our model instead uses **perceived utility** **as a composite function of multiple factors**: reward competitiveness, cost efficiency, validator quality, slashing likelihood, and operational reliability.

The required stake sourced by $SSN_i$ from $SSPⱼ$ is determined proportionally as:

$$
S_i = \left( \frac{U'_{SSP_j}}{\sum_{k=1}^{n} U'_{SSP_k}} \right) \times T
$$

where:

- $S_i$ is the stake sourced by $SSN_i$ from $SSPⱼ$;
- $U’_{SSP_j}$ denotes the perceived utility of $SSPⱼ$ as assessed by $SSN_i$;
- $\sum_{k=1}^{n} U'_{SSP_k}$ aggregates the perceived utility across candidate SSPs;
- $T$ defines the SSN's Target Stake across all SSPs for cryptoeconomic security purposes.
    
    > ***Target Stake** is the minimum level of staked collateral an SSN must secure such that the Cost of Corruption (CoC) outweighs the Profit from Corruption (PfC). It represents the cryptoeconomic threshold where attacks become irrational under adversarial constraints. The higher the PfC, the more Target Stake is required to render corruption economically infeasible.* Check the below section for more detail.
    > 

This formulation achieves three objectives:

- **Relative Utility Normalization**: Stake is assigned based on comparative rather than absolute utility, ensuring efficient delegation even under incomplete information;
- **Budget-Constrained Safety**: Allocations are anchored to the Target Stake $T$, bounding systemic exposure and ensuring cost-aware deployment—avoiding overspend while preserving capital efficiency;
- **Framework Extensibility**: The logic is extensible beyond SSN-to-SSP flows. It applies equally to LRT-to-SSN or Operator-to-SSN delegation, if utility and target stake parameters are independently defined.

## Additional Target Stake Considerations

SSNs with elevated **Profit-from-Corruption (PfC)** potential must provision proportionally higher Target Stake $T$ to offset attack incentives. When adversarial returns exceed slashing penalties, the system becomes economically vulnerable. Raising $T$ increases the **Cost of Corruption (CoC)** and restores economic deterrence.

**Catalysis amplifies capital efficiency for high-$T$ SSNs** by aggregating restaked security across SSPs and enabling dynamic reallocation toward configurations with optimal cost-risk profiles.

A key parameter often overlooked to consider when benchmarking Target Stake is **collateral quality**. Volatile or illiquid collateral degrade the effective security budget, requiring higher nominal $T$ to preserve equivalent resistance to corruption.

For a deep dive check our work with Symbiotic on Target Stake assessments:

https://paragraph.com/@tokensightxyz/modeling-target-stake-requirements

# **Localized vs. Correlated SSN Slashing Modes**

Catalysis is structurally resistant to classical Byzantine Fault Tolerance (BFT) corruption attacks. Two core design elements raise the cost and coordination complexity of system-wide exploits:

1. **Differentiated Validator Sets Across SSPs:** While validators are unified at the Catalysis’ coordinated layer, each SSP maintains its own differentiated set. As a result, any successful attack must breach a broader network of multiple and distinct operator sets across all layers simultaneously—rendering coordinated corruption logistically implausible.
2. **Capital Scale:** Catalysis aggregates restaked collateral potentially exceeding $20 billion across multiple ecosystems. An attacker aiming at cross-SSP compromise would require an economically irrational commitment of capital under realistic adversarial models, making large-scale coordinated attacks financially infeasible.

BFT attacks targeting **dissimilar SSNs**—those with independent validator sets, slashing logic, or infrastructure—form **submodular attack surfaces**, where each additional SSN increases attacker cost faster than it increases reward. Under Catalysis, this type of exploit is not just disincentivized—it is structurally infeasible. The heterogeneity across SSNs breaks exploit scalability and collapses return-on-attack curves.

**Supermodular attacks**, by contrast, exploit convergence: shared validators, identical slashing semantics, or common execution infrastructure across SSNs. These reduce marginal cost and amplify adversarial payoff. While theoretically more viable, Catalysis significantly blunts these vectors by enforcing unified (yet differentiated per SSP) validator sets, incentivizing risk diversification, and amplifying system-wide cryptoeconomic security across all served SSNs—raising both detection likelihood and slashing exposure.

As a result, this section does not model catastrophic BFT-style exploits. Instead, it focuses on **minor but still slashable faults**—e.g., equivocation, liveness failures, or double-signing—and how their impact scope depends on the SSP's underlying **slashing mode**: whether faults are isolated (localized) or propagate across domains (correlated).

## Localized Slashing

EigenLayer exemplifies **localized slashing** through its *Unique Stake and Operator Sets* architecture, introduced in [ELIP-002](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-002.md#executive-summary):

> *Unique Stake guarantees that an Operator’s specific slashable stake can be allocated only to one AVS at a particular time. This single pairing strengthens the AVS's security without creating exogenous risk to other AVSs or the protocol at large. Operator Sets provide an in-protocol structure that enshrines the segmentation of Operators into local groups for the accounting, allocation, and slashing of staked security.*
> 

Each Operator Set registered under an SSN must deposit **dedicated (slashable) stake,** isolated from other SSNs—even if the same Operator Set is active elsewhere. This segmentation enforces fault containment**:**

- **Slashable stake**: Actively securing a specific SSN; subject to penalties based on that SSN’s slashing logic;
- **Non-slashable stake**: Idle or delegated elsewhere; remains untouched by unrelated slashing events.

This model defines **Localized Slashing**: faults are accounted for and penalized **within AVS-specific boundaries**, preventing risk from propagating across SSNs by default.

However, structural isolation does not eliminate all forms of slashing correlation. Some edge cases can still introduce indirect propagation pathways:

- **DeFi Liquidation Contagion**: If an LRT backed by a slashed operator is used as collateral in lending markets (e.g., Aave), a sharp NAV decline can trigger liquidations—particularly in **high-LTV positions or thin-liquidity pools**. Lending protocols that rely on slower or less responsive pricing—often derived from AMMs—may misprice risk during slashing events. In contrast, order book-based markets (e.g, Hyperliquid, dYdX) typically adjust more quickly, potentially containing price dislocations. This mismatch in price realization  can accelerate liquidation cascades and lead to TVL erosion across the affected SSPs;
    
    *For further analysis on this topic, refer to: [LRT Slashing Risk](https://paragraph.com/@tokensightxyz/lrt-slashing-risk).*
    
    <aside>
    💡
    
    ***Drawing a parallel scenario to the LST ecosystem**: A similar event happened in the 2022 [Ankr exploit](https://bsc.news/post/exploit-confirmed-on-ankr-protocol-helio-money-faces-windfall), where a hacker gained control of a compromised key and used it to mint 6 quadrillion aBNBc tokens—a derivative of Ankr Reward Bearing Staked BNB. Since these tokens were meant to represent a claim on underlying BNB, the exploit effectively created counterfeit BNB at scale. As the hacker offloaded the fake aBNBc, the price of liquid staking tokens like BNBx and stkBNB plummeted. Exploiting the chaos, the attacker used the counterfeit tokens as collateral to borrow stablecoins from Helio, ultimately draining the protocol and leaving it financially crippled. Ankr acknowledged a $5M direct loss.*
    
    </aside>
    
- **Operator-Level Fault Overlap**: Even with per-SSN stake isolation, a single operator fault (e.g., downtime, equivocation) can trigger slashes across multiple SSNs they serve. Each AVS enforces its own penalties, but the aggregate result is a **multi-AVS capital drawdown**;
- **Shared Infrastructure Exposure**: If multiple Operator Sets rely on common backend components—such as signing keys, RPC endpoints, or oracle/data feeds—a fault in shared infrastructure can cause **simultaneous localized slashes**, functionally mimicking correlated slashing even under an isolated stake model.

## Correlated Slashing

Correlated slashing occurs when a single validator fault propagates beyond its local domain, impacting multiple SSNs through shared dependencies. Unlike localized slashing—where faults are isolated per AVS—correlated slashing reflects a failure of **stake isolation**, allowing systemic exposure across otherwise independent networks.

Its most critical form emerges from **covariance across participants**: when SSNs, operators, LRTs, and, under Catalysis, even SSPs, share validator infrastructure, slashing semantics, or capital pools. In this expanded surface area, one slashing event—if left unchecked—can trigger cascading penalties across networks with aligned exposure vectors.

Propagation channels include:

- **Shared validator sets** securing multiple SSNs;
- **Overlapping LRT portfolios of SSNs** with collateral tied to affected operators;
- **SSPs that service structurally correlated SSNs**, amplifying blast radius.

When isolation boundaries blur, a single fault domain can drain capital across multiple SSPs, degrade cross-network trust, and weaken Catalysis’ aggregate security posture.

Mitigation depends on preemptive containment:

- **Strict operator segmentation** across SSNs to reduce overlap;
- **Robust, non-ambiguous slashing definitions** to localize penalties;
- **Dynamic rebalancing and portfolio caps** to avoid systemic overexposure;
- **Collateral diversity across LRTs**, minimizing reflexive liquidations.

Catalysis enhances risk visibility across these dimensions—but maintaining slashing containment in correlated environments requires intentional design at the SSN, LRT, and SSP levels.

## Modelling Localized & Correlated Slashing Modes

This section models how SSNs dynamically rebalance stake allocations across SSPs in response to localized and correlated slashing risks. The Sankey transition from non-equilibrium ($t1$) to near-equilibrium ($t_2$) captures how Catalysis nudges the system toward context-aware delegation based on perceived utility gradients and risk asymmetries.

Each **SSN bar** reflects its **Target Stake**—the minimum capital required for secure operation. **SSN2** and **SSN5** are flagged as riskier and depicted in yellow.

![](https://storage.googleapis.com/papyrus_images/3c9b54a22d9c69159e6e677c02e9a47e.jpg)

At $t_1$ (non-equilibrium):

- **Over 50% of SSP2’s utilized stake is sourced from high-risk SSNs**, creating exposure to correlated slashing events. A fault in either SSN could propagate through SSP2, impacting unrelated SSNs like SSN1 and SSN3. Although unlikely, SSP2 becomes a potential channel for **supermodular attack surfaces**—where shared infrastructure and protocol and portfolio overlap reduce marginal attack cost and compounds adversarial payoff. If SSP2 adopts a localized slashing architecture, SSN covariance risk is neutralized, and security posture largely becomes a function of **operator quality rather than covariance**;
- **SSP2** is the most fragile SSP, likely offering higher yields to compensate for its elevated correlated exposure and attract conservative SSNs willing to absorb higher risk;
- **SSN4** is the least risk-exposed SSN and most isolated from slashing propagation risk, as it does not delegate to SSP2. It maintains risk neutrality across the stack;
- **SSN1 and SSN4** display the highest Target Stake requirements, evidenced by taller allocation bars. Both concentrate on **SSP1**, suggesting it offers the lowest effective security pricing or strongest validator set incentives;
- **SSP1 and SSP3** host mostly lower-risk SSNs, but may be **under-incentivized**. Without sufficient yield, they risk underutilization and capital inefficiency—unless they selectively onboard marginal risk to rebalance.

These dynamics define a **non-equilibrium state**, where risk is unevenly distributed, yield signals are misaligned, and capital flows inefficiently—revealing the highly misinformed, at times near-irrational allocation decisions that distort utility assessments. Catalysis detects these imbalances and surfaces slashing asymmetries and overexposure zones to prompt reallocation. SSNs can adjust proactively or reactively, absorbing post-event feedback or shifting positions as incentive curves evolve.

At $t_2$ (near-equilibrium):

- **Aggregate stake across the system increases** as more efficient utility routing raises delegation confidence. Catalysis TVL at $t_2$ exceeds $t_!$, reflected by the thickened bar at the center. More capital is secured, better aligned to perceived utilities and yield-risk profiles**;**
- **SSP1 and SSP3 selectively onboard higher-risk SSNs**, recalibrating their risk/yield mix to improve stake utilization without breaching acceptable slashing correlation thresholds;
- **SSN4 reallocates significantly to SSP2**, suggesting that its perceived utility for SSP2 has improved—potentially from post-slashing incentive realignment or updated risk assessments;
- **SSN1 increases allocations to both SSP1 and SSP2**, indicating balanced exposure and diversified utility sourcing as systemic confidence improves;
- **SSP2 improves its risk-reward profile**, either through sharper reward signaling or reduced correlation risk. If previously underused despite high yields, improved clarity in risk scope and validator incentives unlocks latent TVL inflows**;**
- **SSP1 and SSP3 achieve higher utilization rates**, absorbing previously sidelined capital by optimizing for slashing-aware yield curves;
- **SSP1, in particular, absorbs more stake by accommodating “riskier” stake from SSN2 and SSN5**, improving yield distribution and validator efficiency without destabilizing its slashing profile.

Catalysis acts not as a passive router but as an active coordination layer—surfacing latent risk, realigning delegation behavior, and driving the system toward a **probabilistic equilibrium**. Stake no longer flows blindly toward yield. It follows **perceived-utility paths**, shaped by Catalysis’ intelligence, validator metadata, slashing semantics, and real-time incentive design.

**The result: an adaptive, self-correcting delegation topology that preserves capital efficiency while minimizing systemic slashing risk.**

## Calculating Localized & Correlated Slashing Modes

### Quantifying Slashing Propagation Across SSNs

To model how slashing events propagate across SSNs via shared infrastructure, validator overlap, or LRT portfolio covariance, we extend [our LRT risk model](https://paragraph.com/@tokensightxyz/lrt-slashing-risk) to compute compounded SSN-level exposure. The framework introduces an **amplified temporal risk function** that accounts for both baseline slashing risk and the duration-dependent propagation effect:

$$
R'_{\text{SSN} \, A} = f_{pw}\left( R_{\text{SSN} \, A} \times e^{\mathcal{S} \cdot \lim\limits_{t \to t+n} \Lambda_{t, A}} \right)
$$

where:

- $R_{\text{SSN}A}$ is $\text{SSN}A$’s baseline risk score profile;
- $\mathcal{S} \in [0.1, 0.5]$ is a **sensitivity coefficient that scales cascading risk magnitude.**
    
    → Lower values imply localized containment; higher values reflect elevated systemic fragility due to covariance and shared exposure;
    
- **$\Lambda_{t, A} \in [0.5, 2]$** is the **temporal compounding window**, modeling how long the system remains vulnerable to secondary propagation;
- **$f_{pw}$** is a piecewise function that converts this latent amplification into **portfolio-evaluable risk scores**;
- **$R'_{\text{SSN} \, A}$** is the amplified risk score reflecting correlated propagation effects for $\text{SSN}A$.

*Refer to [Restaking Networks Risk Evaluation](https://hackmd.io/@lCkxYGq-RPqCfyHwdlrqbg/HymUqWD7Jx) for a technical deep-dive on SSN risk and to [LRT Slashing Risk](https://raph.com/@tokensightxyz/lrt-slashing-risk) for more detail on LRT risk and the formula construction.*

### Conditional Propagation Across SSNs

In a **correlated**, rather than localized, setting, slashing propagation does not terminate at the initial fault domain. If SSN A is slashed and shares **dependency vectors** with SSN B, then SSN B acquires **conditional exposure** to the upstream slashing event.

This can be modeled using **conditional expectation**:

$$
\mathbb{E}\left[ R'_{\text{SSN} \, B} \mid \mathbb{S}_{\text{SSN} \, A} \right] > \mathbb{E}\left[ \mathbb{S}_{\text{SSN} \, A} \right], \quad \mathbb{S}_{\text{SSN} \, A} \sim R'_{\text{SSN} \, A}
$$

where:

- $\mathbb{E}\left[ R'_{\text{SSN} \, B} \mid \mathbb{S}_{\text{SSN} \, A} \right] > \mathbb{E}\left[ \mathbb{S}_{\text{SSN} \, A} \right]$ denotes the expected amplified risk score for $\text{SSN} B$, given that the covariant $\text{SSN} A$ has been slashed. Notably, this condition **exceeds the standalone slashing risk** observed on SSN A itself;
- $\mathbb{S}_{\text{SSN} \, A} \sim R'_{\text{SSN} \, A}$ implies that the slashing event observed on $\text{SSN} A$ is statistically consistent with its ex-ante assessed amplified risk.

This formalism captures **second-order propagation**: slashing on SSN A revises the real-time risk profile of SSN B. Such correlations emerge from validator co-dependencies, LRT/SSP portfolio overlap, or entangled slashing semantics.

Amplified events can trigger **cascading reallocation**, **stake withdrawals**, and **portfolio de-risking behavior**. In extreme scenarios, restaking platforms with high TVL—particularly those exposed to frail collateral options—may suffer from **systemic trust degradation**.

To contain this, protocols must adopt **nonlinear risk transmission models** and **dependency-aware allocation strategies**, including:

- Preemptive modeling of second-order propagation;
- Operator-level exposure segmentation;
- Collateral diversification buffers for highly connected SSNs.

# Catalysis Rebalancing Feedback Engine

**Catalysis serves as an active coordination layer, continuously steering the system toward a stable probabilistic equilibrium.** It does not enforce allocation rules. Instead, it surfaces asymmetric risk concentrations, informs incentive design, and enables stake to reorganize dynamically in response to evolving market conditions.

At time $t_1$, the system may exhibit unstable configurations—such as excessive correlated exposure to a single SSP (e.g., SSP2)—which amplify the risk of multi-SSN slashing propagation. Catalysis detects these patterns in real time, quantifies risk gradients, and guides corrective rebalancing through incentive-compatible mechanisms. SSP1, for example, may be prompted to onboard marginally riskier SSNs to absorb systemic imbalance and reduce covariance across validator clusters.

A core function of the engine is discriminating between **localized** and **correlated** slashing vectors. When fault dependencies—such as shared validator sets, infrastructure, or LRT portfolios—are detected across SSNs (e.g., SSN1, SSN3, and SSN5), Catalysis flags these as correlated exposure zones and adjusts delegation incentives to mitigate propagation risk.

The rebalancing logic is modular and extensible, leveraging a suite of programmable primitives:

- **Portfolio-Aware Delegation Logic**: Incentivizes stake redistribution away from SSNs with excessive validator overlap, reducing conditional exposure and localizing fault domains;
- **Validator Caps**: Enforces operator concentration thresholds across SSNs to avoid systemic reliance on dominant infrastructure actors;
- **Collateral-Type Differentiation**: Promotes heterogeneous collateral sourcing to contain DeFi contagion from LRT-backed liquidation cascades;
- **Slashing Semantics Harmonization**: Standardizes fault definitions across SSPs to ensure symmetry in penalties and reduce exploitability via slashing arbitrage.

Crucially, equilibrium under **Quantal Response Equilibrium** is not a point solution. It is a distributional outcome wherein each SSN, based on perceived utility, has no incentive to reallocate. Stake flows probabilistically, reflecting the bounded rationality, asymmetric information, and risk signals that define real-world delegation environments.

Catalysis operationalizes this by continuously mapping utility vectors, flagging slashing covariance, and delivering route-aware, risk-adjusted incentives. The system doesn’t just react—it curates. The result is a dynamic, resilient delegation marketplace that organizes around economic stability rather than static configuration.

# Conclusion [wip]

Catalysis reshapes SSN security economics by embedding awareness of SSP-specific risk, reward, and cost into the core of SSN stake routing. Through unified validator abstraction and programmable delegation logic, it reduces capital inefficiencies, enables market-wide price discovery, and allows SSNs to adapt dynamically in real time.

A stake allocation simulation—modeled through Quantal Response Equilibrium and visualized via a Sankey transition diagram—illustrates the system’s progression from non-equilibrium to near-equilibrium. Stake no longer flows naïvely toward yield-maximizing venues, but reallocates proportionally across SSPs based on risk-adjusted utility curves and Target Stake requirements.

We show that localized slashing isolates faults within the originating SSN, maintaining strict fault containment. Correlated slashing, by contrast, arises from shared validator sets, infrastructure, or portfolio overlap—enabling faults to propagate laterally across SSNs, LRTs, operators, and SSPs. To evaluate this risk, we introduce temporal amplification and conditional propagation formulas that quantify second-order exposure and help guide risk-aware delegation strategies.

Catalysis reframes restaked security as an ongoing coordination game—where utility, risk, and capital efficiency are continuously co-optimized across modular restaking ecosystems.

## References

…

### Learn More on Catalysis

Check Catalysis [website](https://catalysis.network/) and [Twitter](https://x.com/0xcatalysis).

Follow us on [X](https://x.com/tokensightxyz)!

![](https://storage.googleapis.com/papyrus_images/b99d9744ff1b02212a0f288b4fa4705f.png)