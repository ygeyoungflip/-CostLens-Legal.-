# CostLens Legal — Revenue Model (Updated)

## Revenue Pool Model
Each month, all law firm subscription fees are pooled together.

| Tier | Monthly Fee |
|------|------------|
| Solo / Starter | $1,000 |
| Growth / Mid-Size | $7,000 |
| Enterprise / Large | $10,000 |
| Ultra-Premium | $100,000 – $500,000 |

**Total Monthly Revenue = Sum of all firm subscription fees**

## Revenue Split
| Share | Recipient | Method |
|-------|-----------|--------|
| **20%** | YGEYoung Flip (via Stripe Connect) | Auto-routed to YGEYoung Flip's connected Stripe account → bank |
| **80%** | Split evenly among ALL law firms | Direct payout to each firm's bank account |

### Example Calculation (with 10 firms)
```
Total monthly revenue: $58,000
YGEYoung Flip 20%:   $11,600
Firm pool (80%):     $46,400
Per firm payout:     $4,640 (even split among 10 firms)
```

## Key Mechanics
1. **Automatic routing** — Stripe Connect takes 20% off the top and sends to CTO account
2. **Direct bank deposits** — Remaining 80% paid out to each firm's bank account (no holding accounts)
3. **Real-time notifications** — Email + dashboard alerts when payouts are processed
4. **Personalized dashboards** — Each firm sees their branded page (firm color) with:
   - Their subscription fee
   - Total pool
   - Their payout amount
   - Savings achieved
   - Firm color throughout (red, blue, green, yellow, etc.)

## Updated Stripe Fee Configuration
- Previous: `application_fee_amount = round(invoice_total * 0.10)` → 10%
- **New: `application_fee_amount = round(invoice_total * 0.20)` → 20%**

## Firm Dashboard Features
- Firm-branded color scheme
- Real-time payout tracking
- Savings and cost reduction metrics
- Monthly revenue transparency