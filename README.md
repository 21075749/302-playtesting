## Project Title
GBDA 302 A2 : NekoBeat
---
## Group Number (only for group work)
7B

---
## Description
NekoBeat is a rhythm-based game where players press keys in time with falling beats. Blocks move toward a hit bar and the player must press the corresponding key when the beat reaches the correct timing zone.

The game focuses on rhythm recognition, reaction speed and timing accuracy. Visual feedback and sound cues help guide the player and reinforce successful or missed inputs. The design was inspired by rhythm games such as piano-tile style gameplay, where the challenge comes from matching inputs with musical timing.

Players experience a progressively engaging loop where they attempt to maintain rhythm accuracy while reacting quickly to incoming beats.

---
## Interaction Instructions
1. Open the GitHUb Pages link for the project.
2. The game will load automatically in you browser.
3. The splash screen titled **NekoBeat** will appear.

## Starting the Game
When the game opens, the player first sees a splash screen with two buttons:

- **Play** – starts the game
- **Instructions (How to Play)** – opens a screen explaining the controls and gameplay

Players can read the instructions before starting or immediately begin playing.

## Controls
The rhythm gameplay uses two keyboard keys:

- **F key** – hit the left beat
- **J key** – hit the right beat

Players must press the correct key when the falling beat reaches the **hit bar** at the bottom of the screen.

## Gameplay
- Beats fall from the top of the screen toward the hit bar.
- The player presses **F or J** when the beat reaches the bar.
- Correct timing will register a successful hit.

## Game Interface
- A **pause button** appears in the **top right corner** during gameplay.
- Players can pause the game at any time.
- From the pause screen, players can also return to the **How to Play** instructions.

## Gameplay Feedback
- Successful hits trigger visual feedback and sound.
- Mistimed inputs will show feedback indicating the beat was missed.
- The objective is to maintain rhythm accuracy and hit as many beats correctly as possible.

---
## Iteration Notes (Post-Playtest)
Playtesting Summary:

During playtesting, the player generally found the rhythm game concept straightforward and engaging. However, they experienced difficulty understanding the correct timing window for pressing keys. The player asked whether they should press the key before or after the block reaches the line, indicating uncertainty about when inputs should occur.

The hit bar also felt too strict, making it difficult to land precise hits. This caused the player to sometimes spam keys in order to register a successful input.

Another issue observed was that mistakes reset the sequence too quickly. This prevented the player from understanding what they did wrong. The player suggested clearer feedback when mistakes occur to improve learning.

Despite these challenges, the player remained motivated and interested in the game. They responded positively to the visual design and background graphics, noting that the game reminded them of piano-tile style rhythm games.

The player also suggested possible features that could increase engagement, including animations, combo systems, score tracking, power-ups and new mechanics introduced across levels.

### Three Changes Implemented Based on Playtesting

**1. Improve Timing Feedback**

Players had difficulty understanding the correct timing window. To address this:

- Added visual tap feedback when a key is pressed (flash or glow effect)
- Added indicators showing whether an input was perfect, early or late

These changes help players learn the timing window more quickly and reduce key spamming.

**2. Adjust the Hit Window and Error Feedback**

The hit bar originally felt too strict and mistakes reset too quickly.

Changes made:

- Slightly increased the hit window tolerance
- Added visual feedback when a mistake occurs before restarting the sequence

These changes make the gameplay feel fairer and easier to understand.

**3. Add Progression Elements to Increase Engagement**

To make gameplay more rewarding:

- Added a scoring system
- Introduced combo tracking for consecutive successful hits
- Began planning additional mechanics that can appear in later levels

These changes encourage players to improve performance and maintain rhythm accuracy.

---
## Iteration Notes (Post-Showcase)

Playtesting Summary:

During playtesting, players generally enjoyed the rhythm-based gameplay and visual style. However, several issues were identified:

1. **Sound effects:** The tapping sound did not feel satisfying or distinctive when pressing keys.  
2. **Visual alignment:** The blue cat character appeared slightly off-center, affecting the visual balance.  
3. **Music synchronization:** The beats of the music did not always align with the falling blocks, creating timing confusion.  
4. **Technical improvements:** Suggestions were made to explore different JavaScript libraries to improve frame syncing and locking tracks to ensure consistent gameplay timing.

### Changes Implemented / Planned

**1. Update Tap Sound Effect**  
- Replaced the original tap sound with a more distinct and satisfying sound that matches the rhythm.  
- Ensures players can audibly confirm successful inputs.

**2. Adjust Character Position**  
- Moved the blue cat character slightly to the left to create a more visually balanced layout.  

**3. Sync Music to Beats**  
- Locked music tracks to frame updates using `draw()` loop to ensure beats align with falling blocks.  
- Future improvements may include exploring JS libraries that provide precise audio-to-frame syncing.

**4. Lock in Tracks**  
- Ensured all audio tracks are preloaded and start simultaneously with the game loop to maintain rhythm accuracy.


---
## Assets
List any images, sounds, or other files used in your assets/ folder.
Include in-text citations for all assets that are not your own, and connect them to your reference list.

> - `assets/image/bkgdGame.png` (original artwork)
> - `assets/image/bkgdGame.png` (original artwork)
> - `assets/image/cyberpunk.png` (original artwork)
> - `assets/image/bunny.png` (original artwork)
> - `assets/image/kitty.png` (original artwork)
> - `assets/audio/chill.mp3` (created in Soundtrap)
> - `assets/audio/synthHigh.wav` (from Epidemic Sound TODO: in-text citation)
> - `assets/audio/synthLow.wav` (from Epidemic Sound TODO: in-text citation)

Example:
> - `assets/sound/beep.mp3` (created in GarageBand)  
> - `assets/image/background.png` (original artwork)

---
## References
Connect your in-text citations to the reference list along with additional sources that informed your design but were not directly cited. Provide all citations using the ACM reference format. 

[1] Epidemic Sound. n.d. *Synth Sound Effects Collection*.  
Available at: https://www.epidemicsound.com/sound-effects/tracks/281555b2-2dbd-43a0-9d44-16421f51e992/

> synthHigh.wav and synthLow.wav: https://www.epidemicsound.com/sound-effects/tracks/281555b2-2dbd-43a0-9d44-16421f51e992/

---