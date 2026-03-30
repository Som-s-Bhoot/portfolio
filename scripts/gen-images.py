#!/usr/bin/env python3
"""Generate light-theme illustrations for portfolio via OpenAI DALL-E."""
import os, sys, json, base64, subprocess, urllib.request
sys.stdout.reconfigure(line_buffering=True)

# Get API key from Keychain
result = subprocess.run(
    ["security", "find-generic-password", "-s", "openai-api-key", "-w"],
    capture_output=True, text=True
)
API_KEY = result.stdout.strip()
if not API_KEY:
    print("Failed to get API key from Keychain")
    sys.exit(1)

OUTPUT_DIR = "/Users/paglabhoot/clawd/portfolio/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def generate_image(filename, prompt, size="1024x1024"):
    filepath = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        print(f"  ⏭ {filename} already exists, skipping")
        return True
    
    print(f"Generating: {filename}...")
    
    payload = json.dumps({
        "model": "gpt-image-1",
        "prompt": prompt,
        "n": 1,
        "size": size,
        "quality": "medium"
    }).encode()
    
    req = urllib.request.Request(
        "https://api.openai.com/v1/images/generations",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_KEY}"
        }
    )
    
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read())
            b64 = data["data"][0]["b64_json"]
            with open(filepath, "wb") as f:
                f.write(base64.b64decode(b64))
            print(f"  ✓ Saved {filename}")
            return True
    except Exception as e:
        print(f"  ✗ Failed: {filename} — {e}")
        return False

# Styles
AGENT = "Minimalist flat illustration on warm off-white #FAFAF7 background, Scandinavian design aesthetic, clean geometric shapes, warm caramel #D4A574 accent color, no text, no letters, centered icon avatar style, 256x256 suitable"

ICON = "Minimalist line illustration on white background, Scandinavian design, clean and elegant, warm caramel #D4A574 accent, charcoal #1D1D1F lines, no text, small decorative icon"

FEATURE = "Minimalist flat illustration on warm off-white #FAFAF7 background, Scandinavian design aesthetic, clean lines, warm caramel #D4A574 and charcoal #1D1D1F accents, no text, small icon style"

images = [
    # Agent avatars
    ("agent-bhoot-light.png", f"{AGENT}. A friendly ghost spirit icon representing a Chief of Staff AI agent, simple professional warm"),
    ("agent-dev-light.png", f"{AGENT}. A code bracket terminal icon representing a software engineer AI agent, clean technical"),
    ("agent-ari-light.png", f"{AGENT}. A blueprint architecture icon representing a systems architect AI agent, structural precise"),
    ("agent-ricky-light.png", f"{AGENT}. A magnifying glass research icon representing a researcher AI agent, analytical curious"),
    ("agent-mark-light.png", f"{AGENT}. A megaphone content icon representing a marketing AI agent, creative outward-facing"),
    ("agent-dean-light.png", f"{AGENT}. A paintbrush design tool icon representing a designer AI agent, artistic visual"),
    ("agent-pam-light.png", f"{AGENT}. A calendar planning board icon representing a project manager AI agent, organized structured"),
    ("agent-quasi-light.png", f"{AGENT}. A checkmark testing icon representing a QA tester AI agent, thorough quality-focused"),
    ("agent-ravi-light.png", f"{AGENT}. A code review approval icon representing a reviewer AI agent, scrutinizing analytical"),
    ("agent-tom-light.png", f"{AGENT}. A chart portfolio icon representing a trader AI agent, data-driven financial"),
    
    # Feature illustrations
    ("feature-memory-light.png", f"{FEATURE}. Brain with connected nodes representing AI memory and context persistence"),
    ("feature-handoffs-light.png", f"{FEATURE}. Two arrows handing off a baton representing autonomous agent handoffs"),
    ("feature-outputs-light.png", f"{FEATURE}. A dashboard with charts representing real production outputs and metrics"),
    ("feature-infrastructure-light.png", f"{FEATURE}. Server cloud infrastructure blocks representing production AI infrastructure"),
    
    # CognX icons
    ("icon-zero-to-prod.png", f"{ICON}. Rocket launching from zero representing rapid product development"),
    ("icon-ai-native.png", f"{ICON}. Neural network or AI brain representing AI-native architecture"),
    ("icon-iron-dome.png", f"{ICON}. Shield with checkmark representing quality testing and defense system"),
    ("icon-kill-decision.png", f"{ICON}. Sword cutting through a knot representing a decisive strategic kill decision"),
    
    # Mission Control icons
    ("icon-ai-collab.png", f"{ICON}. Human and AI hand together representing AI agent collaboration"),
    ("icon-info-arch.png", f"{ICON}. Nested boxes hierarchy representing information architecture"),
    ("icon-realtime.png", f"{ICON}. Lightning bolt sync arrows representing real-time experience"),
    ("icon-design-system.png", f"{ICON}. Grid of components representing a design system"),
    
    # Whitepaper icons
    ("icon-actual-value.png", f"{ICON}. Gear measurement tool representing actual functional value"),
    ("icon-perceived-value.png", f"{ICON}. Eye or mirror representing perceived brand value"),
    ("icon-relative-value.png", f"{ICON}. Scales comparison arrows representing relative competitive value"),
    
    # Pulse icons
    ("icon-conversation.png", f"{ICON}. Chat bubble with natural language representing conversational interface"),
    ("icon-proactive.png", f"{ICON}. Bell with forward arrow representing proactive alerts and monitoring"),
    ("icon-autonomous.png", f"{ICON}. Robot with guardrails representing autonomous operation with safety"),
    ("icon-context-aware.png", f"{ICON}. Target with brain representing context-aware intelligence"),
    
    # Planview icons
    ("icon-zoom.png", f"{ICON}. Video camera screen representing video integration"),
    ("icon-whiteboard.png", f"{ICON}. Whiteboard with markers representing real-time collaborative whiteboarding"),
    ("icon-adoption.png", f"{ICON}. Rising graph with people representing rapid day-one product adoption"),
    ("icon-portfolio-impact.png", f"{ICON}. Expanding circles representing portfolio-wide impact and rollout"),
]

success = 0
fail = 0
for filename, prompt in images:
    if generate_image(filename, prompt):
        success += 1
    else:
        fail += 1

print(f"\nDone! {success} generated, {fail} failed.")
