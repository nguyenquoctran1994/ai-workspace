---
name: ween-packaging-check
description: Use this skill when reviewing, correcting, or preparing WEEN JAPAN packaging and label designs for print or mockup use, including GH CREATION EX+, DAY ACTIVATION, NIGHT, bottle labels, outer boxes, logo placement, Vietnamese text accuracy, claim safety, ingredient/usage wording, QR/barcode placeholders, print dimensions, and consistency with the official premium Japanese biotech wellness packaging system.
---

# WEEN JAPAN Packaging Check Skill

## Purpose

Use this skill to review and improve WEEN JAPAN packaging designs before they are sent to design, print, mockup, or product presentation.

This skill focuses on brand consistency, print-readiness, claim safety, logo integrity, Vietnamese typography, and product-system clarity.

It is not a replacement for legal, regulatory, or medical review. Flag issues clearly when content should be checked by a qualified professional.

## When to use this skill

Use this skill when the user asks for:

- Packaging review
- Label review
- Bottle label design checking
- Outer box checking
- Print-size checking
- Packaging copy improvement
- Logo placement correction
- Vietnamese text typo checking
- Ingredient/usage/warning wording review
- QR code or barcode placeholder checking
- Product mockup consistency review
- Comparing new packaging with approved WEEN references
- Preparing packaging notes for a designer or printer
- Checking whether a label feels medical, supplement-heavy, or off-brand

## When not to use this skill

Do not use this skill for:

- Daily post captions or social image prompts  
  Use `ween-social-content` instead.

- Landing page strategy, UX, copy, or implementation  
  Use `ween-landing-page` instead.

- CHILLAB or HUONG packaging.

- Legal certification claims that cannot be verified from project files.

- Medical dosage validation as a final authority. For formulation or safety questions, provide cautious notes and recommend qualified review.

## Required context to read

Before reviewing or editing packaging, read the relevant parts of:

1. `WEEN_JAPAN/WEEN_MASTER.md`
2. `WEEN_JAPAN/WEEN_DESIGN.md`
3. `WEEN_JAPAN/WEEN_PRODUCT_SYSTEM.md`
4. `WEEN_JAPAN/WEEN_CONTENT_SYSTEM.md` when marketing or claim wording appears on packaging

Also inspect available reference assets when needed:

- `WEEN_JAPAN/assets/logo/`
- `WEEN_JAPAN/assets/packaging/`
- `WEEN_JAPAN/assets/product_images/`
- `WEEN_JAPAN/social_posts/`

Read only the files needed for the task. Do not duplicate full brand documents in the output.

If a reference asset or file is missing, continue with available context and state what could not be verified.

## Official packaging direction

WEEN JAPAN packaging should feel like:

- Premium Japanese biotech wellness
- Deep navy / biotech blue system
- Clean white WEEN JAPAN logo
- Metallic silver or cyan typography accents
- Calm scientific trust
- Minimal, precise, premium spacing
- Modern supplement/wellness system, not medicine
- Parent-trust first, teen-friendly second
- Print-ready and clean from close-up viewing

Avoid packaging that feels like:

- Hospital, pharmacy, or medical treatment
- Bodybuilding or gym supplement
- Loud gaming product
- Cheap ecommerce supplement label
- Overloaded with icons and claims
- Random Japanese branding
- Fake pharmaceutical authority

## Current approved product visual references

Use the latest approved assets and project files as source of truth.

Known WEEN product system references include:

- GH CREATION EX+
- DAY ACTIVATION
- NIGHT / recovery or sleep support direction, if present in current assets
- Official logo from `WEEN_JAPAN/assets/logo/`
- Packaging references from `WEEN_JAPAN/assets/packaging/`
- Product images from `WEEN_JAPAN/assets/product_images/`

Do not invent new product names, logos, certifications, or manufacturing claims.

## Logo rules

Always protect the official WEEN JAPAN logo.

Check that the logo:

- Uses the official source asset
- Preserves original typography
- Preserves proportions
- Preserves spacing
- Preserves icon shape
- Is not recreated by AI
- Is not distorted, stretched, blurred, or redrawn
- Has enough contrast against the background
- Has safe margin from trim/cut lines
- Is not oversized or spammy

If the logo is wrong, say exactly what should be changed, for example:

- “Replace the generated logo with the official logo file from `WEEN_JAPAN/assets/logo/`.”
- “Keep the mark white and preserve original proportions.”
- “Increase top safe margin before print.”

## Print-readiness checklist

When reviewing for print, check:

- Label size matches intended bottle or box
- Bleed area exists if required
- Safe margin is visible
- No important text near cut edges
- Text is readable at actual print size
- Vietnamese accents render correctly
- QR code area is large and scannable
- Barcode is placeholder or real as intended
- Ingredient and usage panels are not too cramped
- Icons are consistent and not overly detailed
- Color contrast works on matte or glossy material
- Background texture will not reduce text readability
- Export format is suitable for the design/printer workflow

If exact print specs are missing, ask for or recommend:

- Label width x height in mm
- Bottle or box size
- Bleed requirement
- Color mode requirement
- Material type
- Final export format

## Vietnamese typography rules

Check Vietnamese text carefully.

Common issues to flag:

- Missing accents
- Broken Vietnamese characters
- Wrong capitalization
- AI-garbled text
- Mixed English/Vietnamese inconsistently
- Too much small text
- Fonts that do not support Vietnamese
- Low contrast small text on navy backgrounds

Preferred typography style:

- Clean premium sans-serif
- Strong headline hierarchy
- Clear subheadings
- Short benefit phrases
- Small text only for necessary usage/warning details

## Product wording and claim safety

Packaging must avoid medical or guaranteed growth claims.

Never approve wording that claims or implies:

- Guaranteed height increase
- Exact cm growth results
- Cure or treatment of short stature
- Treatment of delayed growth or puberty
- Product alone determines height
- Reopening growth plates
- Medical efficacy without evidence
- Fear-based claims aimed at parents or teens

Avoid phrases such as:

- “Cam kết cao lên”
- “Tăng chiều cao chắc chắn”
- “Hiệu quả 100%”
- “Điều trị thấp còi”
- “Chữa chậm lớn”
- “Kích thích xương phát triển thần tốc”
- “Uống là cao”

Safer wording examples:

- “Hỗ trợ nền tảng phát triển chiều cao”
- “Daily Growth Support System”
- “Sleep • Recovery • Growth Support”
- “Đồng hành cùng giấc ngủ, dinh dưỡng và vận động”
- “Công thức hỗ trợ routine tăng trưởng”
- “Không thay thế chế độ ăn uống cân bằng hoặc tư vấn từ chuyên gia y tế khi cần thiết”

## Ingredient, usage, and warning review

Check that ingredient and usage text is:

- Clear
- Consistent with product files
- Not exaggerated
- Not presented like prescription medicine
- Not using unverified dosage claims
- Not making disease or treatment claims
- Easy for parents to understand

If formulation, dosage, age range, contraindication, or safety wording is unclear, flag it for qualified review.

Do not invent:

- Ingredient amounts
- Serving sizes
- Clinical evidence
- GMP / ISO / Japan standard claims
- Import or manufacturing origin
- Doctor endorsements
- Regulatory approval

## Layout review workflow

When reviewing a packaging image or design file:

1. Identify product type and label format.
2. Check whether official logo is used correctly.
3. Compare visual style with WEEN design system.
4. Check layout hierarchy: logo, title, subtitle, hero visual, ingredients, usage, warning, footer.
5. Check Vietnamese spelling and readability.
6. Check product claims and compliance risk.
7. Check print safety: margins, QR, barcode, text size, bleed.
8. Identify must-fix issues.
9. Identify optional polish improvements.
10. Provide designer-ready instructions.

## Output formats

### Packaging review format

```md
Overall verdict:

Must fix before print:
1.
2.
3.

Should improve:
1.
2.
3.

Brand consistency:

Logo check:

Text / Vietnamese check:

Claim safety check:

Print-readiness check:

Designer instruction:
```

### Designer instruction format

```md
Use this direction for the next revision:

- Keep:
- Change:
- Remove:
- Replace:
- Check before export:
```

### Print handoff checklist format

```md
Print size:
Bleed:
Safe margin:
Color mode:
Export format:
Logo source:
QR / barcode:
Final text proofread:
Approval status:
```

### Comparison format

```md
Reference used:
New design reviewed:
Matched elements:
Mismatched elements:
Risk level:
Recommended correction:
```

## Do rules

Do:

- Use the latest approved WEEN assets as source of truth.
- Keep the design premium and minimal.
- Protect the official logo.
- Check Vietnamese spelling and font support.
- Flag medical or exaggerated claims.
- Keep parent trust as the main packaging logic.
- Make instructions clear enough for a designer/printer.
- Separate must-fix issues from nice-to-have improvements.
- State uncertainty when a file, dimension, or claim cannot be verified.

## Don’t rules

Do not:

- Approve fake logos.
- Approve AI-generated brand marks.
- Invent certifications or legal claims.
- Invent ingredient amounts.
- Use hard medical wording.
- Turn the packaging into a pharmacy label.
- Add too many icons or claims.
- Ignore print margins.
- Ignore Vietnamese accent errors.
- Recommend changes that break the approved brand system.

## Quality checklist

Before finalizing packaging feedback, confirm internally:

- Did I inspect the relevant WEEN design/product files if needed?
- Did I compare against available packaging assets?
- Is the logo protected?
- Is the wording safe?
- Is Vietnamese text readable and correct?
- Are print issues clearly flagged?
- Are must-fix and optional improvements separated?
- Can a designer act on the feedback immediately?
