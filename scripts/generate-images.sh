#!/bin/bash
# Generate light-theme illustrations for portfolio via OpenAI DALL-E
set -e

API_KEY="$1"
OUTPUT_DIR="/Users/paglabhoot/clawd/portfolio/public/images"
mkdir -p "$OUTPUT_DIR"

generate_image() {
  local filename="$1"
  local prompt="$2"
  local size="${3:-1024x1024}"
  
  echo "Generating: $filename..."
  
  local response=$(curl -s https://api.openai.com/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $API_KEY" \
    -d "{
      \"model\": \"gpt-image-1\",
      \"prompt\": \"$prompt\",
      \"n\": 1,
      \"size\": \"$size\",
      \"quality\": \"medium\"
    }")
  
  # Extract base64 data
  local b64_data=$(echo "$response" | python3 -c "import sys,json; data=json.load(sys.stdin); print(data['data'][0]['b64_json'])" 2>/dev/null)
  
  if [ -n "$b64_data" ] && [ "$b64_data" != "None" ]; then
    echo "$b64_data" | base64 -d > "$OUTPUT_DIR/$filename"
    echo "  ✓ Saved $filename"
  else
    echo "  ✗ Failed: $filename"
    echo "$response" | python3 -c "import sys,json; data=json.load(sys.stdin); print(data.get('error',{}).get('message','unknown error'))" 2>/dev/null || echo "  Unknown error"
  fi
}

# ── Agent avatars (light theme) ──
AGENT_STYLE="Minimalist flat illustration on warm off-white #FAFAF7 background, Scandinavian design aesthetic, clean geometric shapes, warm caramel #D4A574 accent color, no text, no letters, centered icon/avatar style, 256x256 suitable"

generate_image "agent-bhoot-light.png" "$AGENT_STYLE. A friendly ghost/spirit icon representing a Chief of Staff AI agent — simple, professional, warm" "1024x1024"
generate_image "agent-dev-light.png" "$AGENT_STYLE. A code bracket or terminal icon representing a software engineer AI agent — clean, technical" "1024x1024"
generate_image "agent-ari-light.png" "$AGENT_STYLE. A blueprint/architecture icon representing a systems architect AI agent — structural, precise" "1024x1024"
generate_image "agent-ricky-light.png" "$AGENT_STYLE. A magnifying glass or research icon representing a researcher AI agent — analytical, curious" "1024x1024"
generate_image "agent-mark-light.png" "$AGENT_STYLE. A megaphone or content icon representing a marketing AI agent — creative, outward-facing" "1024x1024"
generate_image "agent-dean-light.png" "$AGENT_STYLE. A paintbrush or design tool icon representing a designer AI agent — artistic, visual" "1024x1024"
generate_image "agent-pam-light.png" "$AGENT_STYLE. A calendar or planning board icon representing a project manager AI agent — organized, structured" "1024x1024"
generate_image "agent-quasi-light.png" "$AGENT_STYLE. A checkmark or testing icon representing a QA tester AI agent — thorough, quality-focused" "1024x1024"
generate_image "agent-ravi-light.png" "$AGENT_STYLE. A code review or approval icon representing a reviewer AI agent — scrutinizing, analytical" "1024x1024"
generate_image "agent-tom-light.png" "$AGENT_STYLE. A chart or portfolio icon representing a trader AI agent — data-driven, financial" "1024x1024"

# ── Feature illustrations (light theme, for How It Works) ──
FEATURE_STYLE="Minimalist flat illustration on warm off-white #FAFAF7 background, Scandinavian design aesthetic, clean lines, warm caramel #D4A574 and charcoal #1D1D1F accents, no text, small icon style, 256x256"

generate_image "feature-memory-light.png" "$FEATURE_STYLE. Brain with connected nodes representing AI memory and context persistence" "1024x1024"
generate_image "feature-handoffs-light.png" "$FEATURE_STYLE. Two arrows handing off a baton representing autonomous agent handoffs" "1024x1024"
generate_image "feature-outputs-light.png" "$FEATURE_STYLE. A dashboard with charts representing real production outputs and metrics" "1024x1024"
generate_image "feature-infrastructure-light.png" "$FEATURE_STYLE. Server/cloud infrastructure blocks representing production AI infrastructure" "1024x1024"

# ── CognX section illustrations ──
SECTION_STYLE="Minimalist line illustration on white background, Scandinavian design, clean and elegant, warm caramel #D4A574 accent, charcoal #1D1D1F lines, no text, small decorative icon"

generate_image "icon-zero-to-prod.png" "$SECTION_STYLE. Rocket launching from zero representing rapid product development, 0 to production" "1024x1024"
generate_image "icon-ai-native.png" "$SECTION_STYLE. Neural network or AI brain representing AI-native architecture" "1024x1024"
generate_image "icon-iron-dome.png" "$SECTION_STYLE. Shield with checkmark representing quality testing and defense system" "1024x1024"
generate_image "icon-kill-decision.png" "$SECTION_STYLE. Sword cutting through a knot representing a decisive strategic kill decision" "1024x1024"

# ── Mission Control section illustrations ──
generate_image "icon-ai-collab.png" "$SECTION_STYLE. Human and AI hand together representing AI agent collaboration" "1024x1024"
generate_image "icon-info-arch.png" "$SECTION_STYLE. Nested boxes or hierarchy representing information architecture" "1024x1024"
generate_image "icon-realtime.png" "$SECTION_STYLE. Lightning bolt or sync arrows representing real-time experience" "1024x1024"
generate_image "icon-design-system.png" "$SECTION_STYLE. Grid of components representing a design system" "1024x1024"

# ── Whitepaper section illustrations ──
generate_image "icon-actual-value.png" "$SECTION_STYLE. Gear or measurement tool representing actual functional value" "1024x1024"
generate_image "icon-perceived-value.png" "$SECTION_STYLE. Eye or mirror representing perceived brand value" "1024x1024"
generate_image "icon-relative-value.png" "$SECTION_STYLE. Scales or comparison arrows representing relative competitive value" "1024x1024"

# ── Pulse section illustrations ──
generate_image "icon-conversation.png" "$SECTION_STYLE. Chat bubble with natural language representing conversational interface" "1024x1024"
generate_image "icon-proactive.png" "$SECTION_STYLE. Bell with forward arrow representing proactive alerts and monitoring" "1024x1024"
generate_image "icon-autonomous.png" "$SECTION_STYLE. Robot with guardrails representing autonomous operation with safety" "1024x1024"
generate_image "icon-context-aware.png" "$SECTION_STYLE. Target with brain representing context-aware intelligence" "1024x1024"

# ── Planview section illustrations ──
generate_image "icon-zoom.png" "$SECTION_STYLE. Video camera or screen representing video integration" "1024x1024"
generate_image "icon-whiteboard.png" "$SECTION_STYLE. Whiteboard with markers representing real-time collaborative whiteboarding" "1024x1024"
generate_image "icon-adoption.png" "$SECTION_STYLE. Rising graph with people representing rapid day-one product adoption" "1024x1024"
generate_image "icon-portfolio-impact.png" "$SECTION_STYLE. Expanding circles representing portfolio-wide impact and rollout" "1024x1024"

echo ""
echo "Done! Generated images in $OUTPUT_DIR"
