# Video: what was made, and the HyperFrames version

`docs/video/walkthrough.mp4` (15s, 1280×800) is a scroll-through of the finished page. It was recorded in a real browser and encoded with FFmpeg. Use it in a PR or a tweet.

**The polished launch film (needs npm, so run it on your Mac):**

```bash
npx hyperframes init ableton-launch && cd ableton-launch
```

Then ask Claude Code: *"Use hyperframes to make a 20-second launch film from ../docs/deck (6 slides) and ../public/illustrations/step-sequencer.svg. Use the DESIGN.md palette and Jost. One scene per slide, with the line art drawing itself in on scene 1."*

Then run `npx hyperframes check --json`, `npx hyperframes preview`, and `npx hyperframes render` (FFmpeg is required: `brew install ffmpeg`).

Set `export DO_NOT_TRACK=1` first if you want HyperFrames' analytics off.
