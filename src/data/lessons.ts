import type { Lesson, PathwayId, PracticeBlock, SkillCategory, TutorialVideo } from "./types";

function tutorial(youtubeId: string, title: string, creator: string): TutorialVideo {
  return {
    youtubeId,
    title,
    creator,
    url: `https://www.youtube.com/watch?v=${youtubeId}`,
  };
}

function drill(
  title: string,
  requiresPartner: boolean,
  steps: readonly string[],
): PracticeBlock {
  return { title, requiresPartner, steps };
}

export const lessons: readonly Lesson[] = [
  {
    id: "passing-1",
    category: "passing",
    order: 1,
    title: "Inside-foot passing",
    difficulty: "Beginner",
    summary:
      "Strike a grounded pass with the inside of your foot so the ball stays low and goes where your plant foot is pointing.",
    minutes: 12,
    equipment: "A soccer ball and a wall, fence, or a partner standing about 6 to 8 yards away.",
    everydayAlternative:
      "Use a playground ball or a soft indoor ball. Mark the target with two shoes set one ball-width apart.",
    video: tutorial("yOXrf0TIphg", "How to Pass A Soccer Ball", "Online Soccer Academy"),
    technique: [
      "Start with the ball still. Step up so your non-kicking foot, the plant foot, lands beside the ball and points at the target. A plant foot that points left sends most passes left.",
      "Lock the ankle of the passing foot and turn the toes up so the inside of the foot is flat. Swing from the hip, meet the middle of the ball, and follow through toward the target. The pass should roll, not hop.",
    ],
    tips: [
      "Keep your shoulders square to the target. If they open early, the ball leaks off to the side.",
      "Think of pushing the ball, not jabbing it with your toe. The inside of the foot is the widest surface you have.",
      "Start the swing by taking the thigh back. A pass that only flicks from the knee stays weak and wobbly.",
    ],
    drill: drill("Gate passes", false, [
      "Set two shoes, water bottles, or cones one yard apart to make a gate. Stand 6 yards away with the ball still.",
      "Pass with the inside of your right foot through the gate. The ball should stay on the ground and not clip either marker.",
      "Jog in, collect the ball, and repeat. After 8 passes, switch to your left foot for 8 more.",
      "Move back to 8 yards and repeat 8 passes with each foot. If a pass hops, check that you struck the middle of the ball with your toes up.",
    ]),
    soloAlternative: null,
    challenge:
      "From 8 yards, put 8 of 10 inside-foot passes through a gate about two ball-widths wide. At least 4 of the successful passes must be with your weaker foot, and every counted pass must stay on the ground.",
    mistakes: [
      "Planting the standing foot behind the ball, which tips you backward and lifts the pass.",
      "Striking with the toe or the laces, so the ball has no flat surface to guide it.",
      "Watching the target through contact instead of watching the middle of the ball, then looking up after you strike.",
    ],
  },
  {
    id: "passing-2",
    category: "passing",
    order: 2,
    title: "Receiving and controlling a pass",
    difficulty: "Beginner",
    summary:
      "Meet the ball with a soft inside foot so your first touch sets up the next pass instead of bouncing away.",
    minutes: 12,
    equipment: "A ball and a wall, or a partner who can pass on the ground.",
    everydayAlternative:
      "A backpack against a wall can be your rebound target. A rolled pair of socks works in a hallway if you pass gently.",
    video: tutorial(
      "NfiEj1pcfnM",
      "How to Receive a Soccer Pass - Online Soccer Academy",
      "Online Soccer Academy",
    ),
    technique: [
      "Move your body behind the ball before it arrives. Offer the inside of the foot, ankle firm and toes slightly up, about an inch off the ground.",
      "If the pass is slow, guide it a short step into the space you want. If the pass is firm, let the foot come back as the ball arrives, the way you would catch an egg. The touch should leave the ball within one step, on the foot you want to use next.",
    ],
    tips: [
      "Decide the direction of the touch before the ball reaches you. A late decision turns into a stop-dead touch.",
      "Stay on the balls of your feet so you can shift if the pass is a little off line.",
      "A good receive is quiet. If you hear a loud slap, your foot was a wall instead of a cushion.",
    ],
    drill: drill("Cushion and return", false, [
      "Stand 5 yards from a wall. Pass the ball into the wall with the inside of your foot.",
      "As it returns, receive with the inside of the same foot and leave it a half-step in front of you.",
      "Pass it back. Count one rep only if the ball never runs more than one step away.",
      "Do 10 reps with the right foot, 10 with the left, then 10 where you receive with one foot and pass with the other.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete 10 receives in a row, mixing both feet, where the ball stays within one step and your next pass hits the wall on the first try. If the ball escapes, the count starts again.",
    mistakes: [
      "Standing flat-footed and reaching for the ball at the last second.",
      "Stopping every ball dead under your body, so the next pass needs an extra touch.",
      "Using a loose ankle, which makes a firm pass rebound off you.",
    ],
  },
  {
    id: "passing-3",
    category: "passing",
    order: 3,
    title: "Passing with both feet",
    difficulty: "Beginner",
    summary:
      "Use the same inside-foot shape on your weaker side so you can pass without always shifting the ball across your body.",
    minutes: 14,
    equipment: "A ball and a wall or fence you can pass against.",
    everydayAlternative:
      "Pass toward a sturdy chair tipped safely on its side, or toward a backpack propped against a couch. Keep the passes soft indoors.",
    video: tutorial(
      "LoJ5dsFz59s",
      "Full Soccer Training Session Just Using a Wall",
      "Become Elite",
    ),
    technique: [
      "Build the pass on your stronger foot first so you can feel the locked ankle and the plant-foot aim. Then copy that shape on the weaker foot: plant beside the ball, toes up, inside of the foot through the middle.",
      "The weaker foot needs shorter passes and more repeats, not harder swings. If the ball keeps slicing, your plant foot is probably pointing away from the target or your hips are opening.",
    ],
    tips: [
      "Give the weaker foot the first 5 minutes of the session, while you are fresh.",
      "Say “plant, inside, through” out loud on the weaker foot until the order is automatic.",
      "A pass that reaches the wall slowly and on the ground counts. A fast pass that misses does not.",
    ],
    drill: drill("Right, left, alternate", false, [
      "Mark a spot on the wall at knee height or lower, or set a shoe gate 2 yards in front of the wall.",
      "From 5 yards, play 15 inside-foot passes with your stronger foot. Step in and reset the ball if the rebound runs away.",
      "Play 15 with your weaker foot from the same spot. Move closer if you cannot keep them on the ground.",
      "Alternate feet for 20 passes: right, left, right, left. Each pass must hit the wall before you strike the next one.",
    ]),
    soloAlternative: null,
    challenge:
      "Hit 10 alternating-foot passes in a row from 6 yards that return to within a step of your starting spot. Five must be weaker-foot strikes. Restart the streak if a pass pops up or misses the wall.",
    mistakes: [
      "Swinging harder with the weaker foot to make up for less control.",
      "Only practicing the weaker foot when you are already tired at the end.",
      "Turning the hips so far that the weaker foot slices across the ball.",
    ],
  },
  {
    id: "passing-4",
    category: "passing",
    order: 4,
    title: "First touch into space",
    difficulty: "Intermediate",
    summary:
      "Angle your first touch into open space so you can pass or dribble forward without an extra settling touch.",
    minutes: 14,
    equipment: "A ball, a wall or partner, and three markers such as cones, shoes, or bottles.",
    everydayAlternative:
      "Shoes work as gates. If you have no wall, toss the ball up a few feet and control the bounce into the gate. Skip hard throws.",
    video: tutorial(
      "JbOwpq_8CeM",
      "5 Essential First Touch Drills Every Player Should Master",
      "Become Elite",
    ),
    technique: [
      "Look at the space before the ball arrives. If the open space is to your right, open the inside of your left foot so the ball rolls that way as you receive it. The touch is a pass to yourself.",
      "The ball should travel about one to two steps, into a lane you can run onto. A touch that stops at your feet wastes the space. A touch that races four yards away gives the ball away.",
    ],
    tips: [
      "Point the toe of the receiving foot toward the space you want. The ball leaves in that direction.",
      "Take the touch across your body only when the space is on the far side. Otherwise keep it on the foot nearest the space.",
      "After the touch, your first step should be toward the ball, not a hop in place to admire it.",
    ],
    drill: drill("Side-gate receive", false, [
      "Place two markers one yard apart, two steps to your right. That is the gate. Stand facing a wall 6 yards away, or have a partner pass from there.",
      "Play the ball into the wall. As it returns, take one touch with the inside of your left foot through the right-hand gate.",
      "Dribble through the gate, stop the ball with the sole, and start again. Do 8 reps to the right.",
      "Move the gate to your left and take 8 touches with the inside of your right foot.",
    ]),
    soloAlternative: null,
    challenge:
      "Send 6 of 8 first touches through a side gate set two steps away. The ball must go through the gate before you touch it again. Do at least 3 to each side.",
    mistakes: [
      "Killing the ball under your feet even when the space in front is empty.",
      "Looking down so late that the touch direction is a guess.",
      "Flicking the ball with the toe, so it hops over the gate instead of rolling through it.",
    ],
  },
  {
    id: "passing-5",
    category: "passing",
    order: 5,
    title: "Passing accuracy",
    difficulty: "Intermediate",
    summary:
      "Pick a small target and match the pace of the pass to it, so a teammate can receive without chasing or bracing.",
    minutes: 15,
    equipment: "A ball, two pairs of shoes or cones to build two gates, and a wall or partner.",
    everydayAlternative:
      "Build gates from water bottles, books stood on end, or sticks. A garage door or playground wall replaces a partner.",
    video: tutorial(
      "Sm-u_ESEmjE",
      "How to Improve Your Passing Accuracy in Football | Tips",
      "AllAttack",
    ),
    technique: [
      "Choose the target before you plant. The plant foot points at the middle of that target, about a ball’s width beside the ball. Strike with the inside of the foot and follow through along the same line.",
      "Pace is part of accuracy. A pass that flies through a gate but would hit a teammate too hard to control is not accurate yet. From 10 yards, the ball should arrive so the receiver can cushion it with one touch.",
    ],
    tips: [
      "Make the gate smaller when you are succeeding, not the swing bigger.",
      "Use both feet. Accuracy that only exists on one side disappears in a game.",
      "If two passes in a row miss the same side, fix the plant foot before you take another.",
    ],
    drill: drill("Narrow gates", false, [
      "Build a gate two ball-widths wide, 10 yards away. If you are indoors, put the gate 2 yards in front of a wall so the ball stops safely.",
      "Call the foot you will use, then pass. Retrieve and repeat for 5 right-foot and 5 left-foot passes.",
      "Build a second gate 10 yards to the side. Receive through the first gate’s rebound or a partner pass, open your body, and play the next pass through the side gate.",
      "Keep a tally. A pass counts only if it goes through the gate on the ground.",
    ]),
    soloAlternative: null,
    challenge:
      "From 10 yards, put 7 of 10 passes through a gate two ball-widths wide. At least 3 must be with your weaker foot, and all 7 must stay on the ground.",
    mistakes: [
      "Aiming at a whole wall instead of a spot the size of a foot.",
      "Following through across your body, which pulls the ball off the target line.",
      "Adding power after a miss. Most misses are an aim problem, not a strength problem.",
    ],
  },
  {
    id: "passing-6",
    category: "passing",
    order: 6,
    title: "One-touch passing",
    difficulty: "Intermediate",
    summary:
      "Redirect a moving ball with one inside-foot contact when a teammate is free and you do not have time for a settling touch.",
    minutes: 14,
    equipment: "A ball, a wall or a partner, and two markers about 10 yards apart.",
    everydayAlternative:
      "A smooth outside wall works. Indoors, use a soft ball and a couch cushion as a quiet rebound if a real wall is not available.",
    video: tutorial("zbELd5LI954", "Soccer Passing - One Touch", "Online Soccer Academy"),
    technique: [
      "Get in line early and stay slightly over the ball. A one-touch pass uses the pace already on the ball, so the swing is short. Meet the middle or slightly above the middle with the inside of the foot.",
      "Do not lean back. Leaning lifts the pass. Play one touch when someone is closing you down and a teammate, or the wall in practice, is an easy target. If the ball is bouncing at your chest or you are off balance, take a touch instead.",
    ],
    tips: [
      "The preparation step is the skill. Be set before the ball arrives.",
      "Keep the ankle firm. A floppy foot turns a simple redirect into a shank.",
      "Smile at a miss and reset. One-touch play needs confidence more than a bigger swing.",
    ],
    drill: drill("Wall one-touch", false, [
      "Stand 4 yards from the wall. Pass and play the rebound first time, one touch only, for 30 seconds with your right foot.",
      "Repeat for 30 seconds with your left foot. Count only the passes that stay on the ground.",
      "Step back to 8 yards. Play a slightly firmer pass, then one-touch the return. Do 12 with each foot.",
      "Move along the wall between passes so you are not standing in the same spot. The ball should still come back to your new position.",
    ]),
    soloAlternative: null,
    challenge:
      "Play 12 one-touch passes in a row from 6 to 8 yards that stay on the ground and return within one step. Use both feet at least 4 times each. A bounce or a second touch breaks the streak.",
    mistakes: [
      "Taking a long follow-through, which sends a moving ball over the target.",
      "Hitting under the ball because your chest leaned away.",
      "Trying one-touch passes when you are stretched and off balance. That is a moment to control it.",
    ],
  },
  {
    id: "passing-7",
    category: "passing",
    order: 7,
    title: "Pass and move",
    difficulty: "Advanced",
    summary:
      "After you pass, leave that spot and show for the next ball at a new angle.",
    minutes: 16,
    equipment: "A ball, a partner, and three markers set in a triangle about 8 yards apart.",
    everydayAlternative:
      "If you are alone, the solo version uses a wall and the same three markers. Shoes or bottles can mark the triangle.",
    video: tutorial(
      "hN84t4Nbe-8",
      "1A Soccer | Master Soccer Drills: One-Touch Passing & Movement",
      "1A Soccer",
    ),
    technique: [
      "The pass is only half of the action. As the ball leaves your foot, move to a marker you were not standing on. Arrive side-on, so your first touch or one-touch pass can go forward or back.",
      "Call for the ball with a hand or your voice before you arrive. Your partner should pass to the space just in front of you, not to the spot you left. If you pass and stand still, the practice does not count.",
    ],
    tips: [
      "Move as you pass, not after you watch the pass land.",
      "Check your shoulder on the way to the next marker so you know which way you will play.",
      "Keep the passes on the ground until the movement is reliable.",
    ],
    drill: drill("Triangle support", true, [
      "Partner needed. Set three markers in a triangle, about 8 yards on each side. You start at marker A with the ball. Your partner waits between B and C.",
      "Pass to your partner and immediately run to an empty marker. Your partner plays the ball to your new marker, to your feet or one step ahead.",
      "Control or one-touch it back, then move to the remaining marker. Keep this going for 2 minutes.",
      "Switch roles. A rep counts only if you are at a new marker when the ball comes back.",
    ]),
    soloAlternative: drill("Wall triangle", false, [
      "Set three markers in a triangle, 6 yards from a wall. Start at marker A.",
      "Pass into the wall, then sprint to marker B before the rebound arrives. Receive there and pass again.",
      "Next time go to marker C. Keep alternating for 12 passes.",
      "If the rebound beats you to the marker, the pass was too soft or you watched it. Pass a little firmer and move as your foot hits the ball.",
    ]),
    challenge:
      "Complete 8 pass-and-move sequences. With a partner, you must be at a new marker when the return arrives. Alone, you must receive 8 wall rebounds at a different marker from the one you passed at. Standing still ends the sequence.",
    mistakes: [
      "Admiring the pass and jogging late.",
      "Asking for the ball at your feet when a defender, or a cone standing in for one, is on your back. Ask for it into space.",
      "Running in a straight line past the passer and taking away their angle.",
    ],
  },
  {
    id: "passing-8",
    category: "passing",
    order: 8,
    title: "Choosing the right pass",
    difficulty: "Advanced",
    summary:
      "Look up, name the safest pass that still moves your team forward, and play it with the foot that fits the angle.",
    minutes: 16,
    equipment: "A ball and three targets marked forward, side, and back. A partner can call the target, or you can use scraps of paper.",
    everydayAlternative:
      "Label three shoes or pieces of paper F, S, and B. A backpack is the defender you are not allowed to pass through.",
    video: null,
    technique: [
      "Before the ball arrives, check over your shoulder. A forward pass is best when the lane is open and a teammate can receive facing the goal. A sideways pass keeps the ball when the forward lane is blocked. A back pass is a reset, not a failure, when pressure is tight.",
      "Match the foot to the choice. A pass to your right is usually cleaner with the right foot, and a pass behind you may need an open body and the far foot. The right pass is the one a teammate can use next, on the ground, at a pace they can handle.",
    ],
    tips: [
      "If two passes are open, pick the one that leaves the receiver facing forward.",
      "Do not force the forward pass through a defender’s legs just because it looks brave.",
      "Play the back pass early, while you can still set your body. A late back pass is a tackle waiting to happen.",
    ],
    drill: drill("Call the pass", false, [
      "Set a forward target 8 yards ahead, a side target 8 yards to your left, and a back target 6 yards behind you. Put a backpack or cone in front of you as a defender you must go around.",
      "Write F, S, and B on six small papers, two of each. Mix them and place them face down.",
      "Turn over one paper, then pass to that target with the correct foot: right foot for a target on your right, left foot for a target on your left, either foot for the back target if your body is open.",
      "The ball must reach the target on the ground without touching the backpack. Do all 6 papers, reshuffle, and do them again.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete 9 of 12 called passes to the correct target on the ground. A pass to the wrong target, a pass in the air, or a pass that hits the defender-marker does not count. Say the choice out loud before you strike: forward, side, or back.",
    mistakes: [
      "Looking at the ball the whole time and choosing only after you have already stopped it.",
      "Playing the hard forward pass when the side pass was free.",
      "Using the same foot for every angle and sacrificing the shape of the pass.",
    ],
  },
  {
    id: "dribbling-1",
    category: "dribbling",
    order: 1,
    title: "Basic ball touches",
    difficulty: "Beginner",
    summary:
      "Get used to the ball with soft sole taps and inside-foot taps so it stays under your body.",
    minutes: 12,
    equipment: "A ball and a small patch of ground about two yards square.",
    everydayAlternative:
      "A playground ball or a rolled-up pair of socks inside a plastic bag can stand in for a ball on carpet. Practice gently.",
    video: tutorial(
      "e5RxAJM-oxc",
      "10 EASY Ball Mastery Exercises For Beginners | Improve Your Ball Control",
      "7mlc",
    ),
    technique: [
      "Stay on the balls of your feet with a soft bend in the knees. For sole taps, touch the top of the ball lightly with the bottom of your foot, left then right, without stomping. The ball should barely move.",
      "For inside-inside taps, push the ball a few inches from the inside of one foot to the inside of the other. Keep your hips over the ball. These touches are the base for every later move.",
    ],
    tips: [
      "Start slower than you think. Speed comes after the ball stops running away.",
      "Look up for a second every few touches. The ball can stay close even when your eyes leave it.",
      "Use both feet on every exercise. The weaker foot gets the same number of taps.",
    ],
    drill: drill("Foundation minute", false, [
      "Sole taps: alternate feet on top of the ball for 30 seconds. The ball stays in one spot.",
      "Inside-inside: roll the ball between your feet for 30 seconds. It should not travel forward.",
      "Rest 20 seconds, then repeat both exercises while lifting your eyes to a tree, window, or picture every fifth touch.",
      "Finish with 20 sole taps counted out loud, then 20 inside-inside taps.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete 20 sole taps without the ball rolling more than one foot-length away, then 20 inside-inside taps without it escaping your feet. If it runs off, reset the count for that set.",
    mistakes: [
      "Stomping the sole tap so the ball shoots forward.",
      "Standing up straight and tapping with stiff legs.",
      "Practicing so fast that the touches become kicks.",
    ],
  },
  {
    id: "dribbling-2",
    category: "dribbling",
    order: 2,
    title: "Inside and outside touches",
    difficulty: "Beginner",
    summary:
      "Move forward by pushing the ball with the inside and then the outside of the same foot.",
    minutes: 12,
    equipment: "A ball and a lane about 10 yards long. Two shoes can mark the ends.",
    everydayAlternative:
      "A driveway, hallway, or park path works. Use shoes as the start and finish lines.",
    video: tutorial(
      "qM7mpPEekac",
      "10 Dynamic Ball Mastery Exercises Every Player Should Master | 1000+ Touch Workout For Footballers",
      "7mlc",
    ),
    technique: [
      "Push the ball a short step with the inside of your right foot, then the outside of the same foot. Contact the middle of the ball so it glides instead of bouncing. Switch and do the pattern with the left foot.",
      "Keep the ball within one step. If you have to reach, the last touch was too strong. Your knees stay soft and your chest stays over the ball.",
    ],
    tips: [
      "The outside touch uses the area near your little toe, not a wild swipe.",
      "Take a touch with every step when you are moving. No empty steps while the ball rolls away.",
      "Do a full run with the right foot before you switch, so each foot learns the rhythm.",
    ],
    drill: drill("Lane touches", false, [
      "Mark a start line and a finish line 10 yards apart.",
      "Dribble to the finish using only inside-then-outside touches with your right foot. Walk the pattern once before you jog it.",
      "Come back with only the left foot.",
      "Repeat the down-and-back trip two more times. The ball should never get more than one step ahead.",
    ]),
    soloAlternative: null,
    challenge:
      "Dribble 10 yards and back twice, once leading with each foot, using only inside and outside touches. The ball stays within a step the whole way, and you do not switch the lead foot until you turn around.",
    mistakes: [
      "Kicking the ball three yards ahead and running after it.",
      "Using only the inside of the foot, so you never learn the outside push.",
      "Hitting the bottom of the ball and making it bobble up.",
    ],
  },
  {
    id: "dribbling-3",
    category: "dribbling",
    order: 3,
    title: "Close control",
    difficulty: "Beginner",
    summary:
      "Dribble through a tight space with a touch on every step so the ball feels glued to your foot.",
    minutes: 14,
    equipment: "A ball and four markers placed one big step apart in a straight line.",
    everydayAlternative:
      "Use shoes, rocks, or water bottles as markers. Leave at least a step of space so you are weaving, not jumping a pile.",
    video: tutorial(
      "XiXtFiR_F7M",
      "GLUE The Ball To Your Foot With These 5 Drills | Dribbling Training For Footballers",
      "7mlc",
    ),
    technique: [
      "In a crowd or a small space, the ball stays under your chest. Touch it with the inside or outside of the foot on every step. Your head can come up between touches once the ball is close.",
      "At each marker, take a small touch to the side and a small touch forward. Big touches are for open grass, which is a later lesson. Here, if a marker falls, the touch was too heavy.",
    ],
    tips: [
      "Bend your knees more as the gaps get smaller. A tall dribbler bumps the ball away.",
      "Use the foot farther from the marker to nudge the ball past it.",
      "If you lose the ball, set the markers back up and start that run again. Close control is a habit of restarts.",
    ],
    drill: drill("Tight weave", false, [
      "Set four markers in a line with one large step between them.",
      "Weave through with small touches. Go down and back. That is one trip.",
      "Do four trips. On trips 3 and 4, look up at the far marker as you pass the second one.",
      "If you hit a marker, freeze, pull the ball back with the sole, and continue from that marker.",
    ]),
    soloAlternative: null,
    challenge:
      "Finish 4 down-and-back weaves through four markers without the ball touching a marker. You must take at least one touch between each marker.",
    mistakes: [
      "Pushing the ball through the whole line in one kick.",
      "Watching your feet so closely that you drift off the line.",
      "Standing the markers so far apart that the drill becomes a jog, not close control.",
    ],
  },
  {
    id: "dribbling-4",
    category: "dribbling",
    order: 4,
    title: "Changing direction",
    difficulty: "Intermediate",
    summary:
      "Turn the ball with the inside or the outside of your foot and accelerate into the new direction.",
    minutes: 15,
    equipment: "A ball and two markers about 8 yards apart.",
    everydayAlternative:
      "A shoe can be the cone you turn on. A tree or a backpack can be the finish point after the turn.",
    video: tutorial(
      "Kq8yGgtKwfI",
      "10 Easy Skills To Turn Defenders | How To Skillfully Change Direction With The Ball",
      "7mlc",
    ),
    technique: [
      "For an inside hook, reach the foot around the ball and sweep it back the way you came with the inside of the foot. For an outside hook, use the outside of the foot to pull the ball back. In both turns, get your body between the ball and the marker that stands in for a defender.",
      "The turn is not finished until you push the ball into the new direction and sprint two or three steps. A turn without acceleration lets a defender recover.",
    ],
    tips: [
      "Slow down slightly as you arrive at the marker so the hook is clean, then go.",
      "Practice both feet. A turn only on the right foot is easy to read.",
      "Keep the ball within a step during the hook. A big swing kicks it to the other team.",
    ],
    drill: drill("Hook and explode", false, [
      "Place a marker at your feet and another 5 yards behind you.",
      "Dribble slowly at the first marker. Perform an inside hook with your right foot, then sprint and stop the ball at the far marker with the sole.",
      "Come back with an outside hook using the right foot. Do 4 inside and 4 outside.",
      "Repeat the set with the left foot. Each turn should leave the ball on the far side of the marker from where you started.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete 8 clean turns, 4 inside hooks and 4 outside hooks, with at least 2 of each on each foot. After every turn, reach a marker 5 yards away at a sprint, with the ball still within a step when you arrive.",
    mistakes: [
      "Turning the ball but staying at the same speed.",
      "Hooking with the toe and sending the ball straight up.",
      "Leaving the ball on the marker’s “defender” side, where a real player could poke it away.",
    ],
  },
  {
    id: "dribbling-5",
    category: "dribbling",
    order: 5,
    title: "Changing speed",
    difficulty: "Intermediate",
    summary:
      "Slow down enough that a defender settles, then push the ball into space and explode past.",
    minutes: 14,
    equipment: "A ball and three markers about 8 yards apart.",
    everydayAlternative:
      "Shoes or bottles mark the stop points. Any open path of about 25 yards is enough.",
    video: tutorial(
      "mQz3l9Ro2nE",
      "How To Do The Change Pace Stop and Go Soccer Football Move",
      "Vogel Soccer Mastery",
    ),
    technique: [
      "Jog with the ball close. To sell the stop, put the sole on top of the ball and almost come to a halt. A tiny slowdown does not change a defender’s feet. The pause should feel almost too slow.",
      "When you go, push the ball two or three yards ahead with the laces or the outside of the foot and sprint onto it. The first two steps are the fastest. During the slow part, keep the ball under your body so it cannot be poked away.",
    ],
    tips: [
      "Look up during the pause, as if you might pass. That sells the stop.",
      "If you are already at full speed, you have nothing to change into. Start slower than your sprint.",
      "Use both feet to push the ball away on the “go.”",
    ],
    drill: drill("Cone stop-and-go", false, [
      "Set three markers in a line, 8 yards apart.",
      "Jog with the ball to the first marker, stop it fully with the sole, count “one,” then explode to the next marker.",
      "Stop again, count “one,” and explode to the last marker. Walk back and repeat.",
      "Do 4 reps stopping with the right sole and exploding with the right foot, then 4 with the left. The pause must be visible.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete 6 stop-and-go reps across the three markers. Each rep needs a full sole stop you could count to one, then a push of about 2 or 3 yards and a sprint. Do 3 with each foot. A rep without a real pause does not count.",
    mistakes: [
      "Slowing only a little, so there is no change of pace.",
      "Leaving the ball a yard ahead while you stop, which is an easy tackle.",
      "Pushing the restart too far and running past the ball.",
    ],
  },
  {
    id: "dribbling-6",
    category: "dribbling",
    order: 6,
    title: "Simple feints",
    difficulty: "Intermediate",
    summary:
      "Drop your shoulder one way and take the ball the other way, using a body feint a defender can actually see.",
    minutes: 15,
    equipment: "A ball and one marker to stand in for a defender.",
    everydayAlternative:
      "A water bottle, shoe, or backpack is the defender. Give yourself 10 yards of space past it.",
    video: tutorial("ClB_LhMr1Ec", "How To REALLY Master The Body Feint", "7mlc"),
    technique: [
      "Dribble toward the marker at a jog. To feint left, drop your left shoulder and left knee as if you will take the ball that way. Do not touch the ball on the fake. As the fake finishes, push the ball to the right with the outside of your right foot and accelerate.",
      "The fake has to be big enough to see from a few yards away. A tiny twitch does not move a defender. You can add a step-over later: swing the foot around the ball without touching it, then exit the other way. Learn the body feint first.",
    ],
    tips: [
      "The ball stays still, or keeps its old path, during the fake. The feet lie. The ball tells the truth a moment later.",
      "Explode on the exit touch. A feint without speed is a dance.",
      "Practice the fake to both sides. Defenders notice a player who only goes one way.",
    ],
    drill: drill("Cone feint", false, [
      "Set one marker. Start 6 yards away and dribble straight at it.",
      "Feint to the left and exit to the right. Sprint 5 yards past the marker and stop the ball.",
      "Do 6 exits to the right, then 6 feints to the right with exits to the left.",
      "On the last 4, look at the marker during the fake instead of at the ball.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete 8 body feints in a row, 4 exiting each way. The exit touch must pass the marker on the opposite side of the fake, and you must sprint onto the ball for at least 4 yards.",
    mistakes: [
      "Faking and taking the ball the same direction, which is just a wobble.",
      "Making the fake so small that your shoulders never move.",
      "Stopping after the fake to admire it, then pushing the ball late.",
    ],
  },
  {
    id: "dribbling-7",
    category: "dribbling",
    order: 7,
    title: "Shielding the ball",
    difficulty: "Advanced",
    summary:
      "Put your body between the ball and a defender so you can keep it, then turn away when you are ready.",
    minutes: 14,
    equipment: "A ball and a partner who will pressure the ball without grabbing or pushing. A wall works for the solo version.",
    everydayAlternative:
      "Alone, use a fence or a wall as the pressure side. A backpack on the ground can mark where the defender’s feet would be.",
    video: tutorial(
      "XAPe56hVvGQ",
      "Soccer Skills and Drills - Shielding the Ball - Coach Joe Luxbacher",
      "SportVideos",
    ),
    technique: [
      "Turn sideways. The ball stays on the foot farther from the defender. Your arm can make a frame for space, bent and strong, but you do not shove. Knees are bent so you can roll or turn.",
      "Feel the defender on your back and look for the next action: a turn away from them, or a pass if a teammate is there. Shielding for a few seconds is a win. You do not have to spin every time.",
    ],
    tips: [
      "Keep the ball on the far foot. If it is on the near foot, a toe can nick it.",
      "Use the arm as a barrier, not a push. Pushing is a foul.",
      "If they reach around, roll the ball to the other foot with the sole and reset your body.",
    ],
    drill: drill("Hold for five", true, [
      "Partner needed. You start with the ball. Your partner stands on one side and may reach for the ball with a foot. They should not grab your shirt or charge through you.",
      "Shield for 5 seconds. Your partner counts. If they touch the ball, the rep ends early.",
      "After a successful hold, turn away to the open side and dribble 5 yards. Do 6 holds, then switch roles.",
      "On the last two holds, your partner can move from one side to the other. You adjust and keep the ball on the far foot.",
    ]),
    soloAlternative: drill("Wall shield", false, [
      "Stand side-on with a wall at your back, a step away. The ball is on the foot farther from the wall.",
      "Roll the ball across your body with the sole, from one foot to the other, 10 times. The ball should never touch the wall.",
      "Every third roll, turn away from the wall and dribble 4 yards, then come back and reset.",
      "Stay low. If you stand tall, the ball drifts into the wall.",
    ]),
    challenge:
      "With a partner, keep the ball for 5 full seconds on 3 separate holds without them touching it. Alone, complete 10 side-on sole rolls with your back to a wall without the ball touching the wall, then dribble away cleanly after the last one.",
    mistakes: [
      "Facing the defender square, so the ball is an easy target between you.",
      "Pushing with the forearm or holding their shirt.",
      "Looking only at the ball and missing the space you could turn into.",
    ],
  },
  {
    id: "dribbling-8",
    category: "dribbling",
    order: 8,
    title: "Combining moves",
    difficulty: "Advanced",
    summary:
      "Link a feint, a change of speed, and a turn into one dribble that still ends with the ball under control.",
    minutes: 16,
    equipment: "A ball and three markers set 6 yards apart.",
    everydayAlternative:
      "Shoes or bottles mark the three spots. You need about 20 yards of open space.",
    video: tutorial(
      "moolvhxe_oc",
      "Dribbling For Beginners | The Blueprint For One v One Dribbling With Coerver Coaching",
      "7mlc",
    ),
    technique: [
      "Use one move to create a small advantage, then a second only if you still need it. A useful chain for this lesson is a body feint at the first marker, a stop-and-go at the second, and an inside hook at the third.",
      "Each piece should be readable: a real shoulder fake, a real pause, a real turn, and a sprint after the last action. Stringing moves together is not the same as doing tricks in one spot. You are traveling the whole time.",
    ],
    tips: [
      "If the first move already gives you space, skip the rest and go. In this drill you practice the chain. In a game you stop when you are free.",
      "Keep the ball close during the slow parts and push it into space during the fast part.",
      "Do the chain going right and going left so it is not a memorized dance in one direction.",
    ],
    drill: drill("Three-move lane", false, [
      "Marker 1: jog in and body-feint left, exit right.",
      "Marker 2: slow down, sole stop for a one-count, then explode toward marker 3.",
      "Marker 3: inside hook so you face back up the lane, then sprint 4 yards and stop the ball.",
      "Walk back and repeat. Do 4 chains exiting to the right and 4 exiting to the left, swapping the hook foot to match.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete the three-move sequence 4 times, 2 in each direction, without the ball running more than a step away. Each run needs a visible feint, a counted pause, a hook, and a sprint after the hook.",
    mistakes: [
      "Rushing the three moves into one blur so none of them are convincing.",
      "Stopping the sequence to reset the ball with your hands.",
      "Adding extra tricks between the markers and losing the ball before the sprint.",
    ],
  },
  {
    id: "shooting-1",
    category: "shooting",
    order: 1,
    title: "Body position and planting foot",
    difficulty: "Beginner",
    summary:
      "Land the non-kicking foot beside the ball and keep your body over it so the shot has a stable base.",
    minutes: 12,
    equipment: "A ball and a target: a wall, a small goal, or two markers about 4 yards apart.",
    everydayAlternative:
      "Two shoes can be the goal. A fence or a safe wall is the backstop. Never shoot toward a window, a road, or a person.",
    video: tutorial("AwbuY5mAq-g", "Kids soccer SHOOTING basics", "Prime Coaching Sport"),
    technique: [
      "Approach from a slight angle, not from straight behind the ball. The plant foot lands next to the ball, about a hand’s width away, with the toes pointing at the target. If the plant foot is behind the ball, you lean back and the shot climbs.",
      "Your head and chest stay over the ball through contact. Eyes stay on the ball until you strike it. This lesson is about the landing, so the swing stays easy. Power comes later.",
    ],
    tips: [
      "Take small steps on the approach so the plant foot can land in the right place.",
      "Freeze for a moment after the first few plants and check: Is my foot beside the ball, and is my chest over it?",
      "If the ball keeps going over the target, move the plant foot slightly back toward level with the ball and stay taller over it, not behind it.",
    ],
    drill: drill("Plant and pass-shot", false, [
      "Set two markers 4 yards apart, 6 yards from the ball, with a safe backstop.",
      "For the first 5 shots, step in, plant, and pause so you can see the plant foot beside the ball. Then strike gently with the inside of the foot so the ball stays on the ground.",
      "For the next 8 shots, remove the pause but keep the same landing. Walk in. Do not sprint yet.",
      "Switch feet after 4 of those shots. A shot counts if it goes between the markers on the ground.",
    ]),
    soloAlternative: null,
    challenge:
      "Land the plant foot beside the ball on 8 of 10 easy shots from 6 yards, and send those 8 between the markers along the ground. Use each foot at least 3 times. Check the plant by placing a shoe where your foot should land if you need a reminder.",
    mistakes: [
      "Planting behind the ball and falling backward.",
      "Planting so close that you kick your own ankle area and shank the ball.",
      "Looking at the goal early, which pulls your chest up and sends the ball high.",
    ],
  },
  {
    id: "shooting-2",
    category: "shooting",
    order: 2,
    title: "Side-foot finishing",
    difficulty: "Beginner",
    summary:
      "Finish like a firm pass into a corner, using the inside of the foot when you want accuracy more than power.",
    minutes: 14,
    equipment: "A ball and a goal, or two markers a goal-width apart with something soft marking each corner.",
    everydayAlternative:
      "Build a goal with backpacks or shoes about 4 steps apart. Put a water bottle one step inside each “post” as the corner target. Use a wall behind it.",
    video: tutorial(
      "X2Lb84oetsQ",
      "How I Coach this FINISHING technique | Soccer Training",
      "Joner Football",
    ),
    technique: [
      "Pick the corner before you move toward the ball. Open your hips a little, plant the standing foot toward that corner, and strike the middle of the ball with the inside of the foot. Toes stay up and the ankle stays firm. This is a pass into the net.",
      "Aim for the space a step inside the post and along the ground. You do not need to hit it hard from 8 yards. If the ball stays low and reaches the corner, the finish worked.",
    ],
    tips: [
      "Call the corner out loud before you start your steps.",
      "Keep your chest over the ball. Leaning back turns a side-foot finish into a chip.",
      "Use the same pass shape you learned in the first passing lesson. The target is just smaller and more important.",
    ],
    drill: drill("Corner bottles", false, [
      "From 8 yards, place a bottle or shoe one step inside each post, a ball-width off the goal line.",
      "Play 5 side-foot finishes at the right corner with your left foot if that angle is comfortable, or with the foot that lets you open the hip toward that corner. Then 5 at the left corner.",
      "Retrieve between shots. The ball starts still. No running approach yet, just one plant step.",
      "A shot counts if it hits the corner marker or passes between the marker and the post, on the ground.",
    ]),
    soloAlternative: null,
    challenge:
      "Score 6 of 10 side-foot finishes from 8 yards in the corner you named before the shot. At least 2 of the 6 must be with your weaker foot. Shots in the air do not count.",
    mistakes: [
      "Aiming at the middle of the goal because you never picked a corner.",
      "Using the toe, which makes the “pass into the net” wobble.",
      "Striking so hard that the inside-foot shape falls apart.",
    ],
  },
  {
    id: "shooting-3",
    category: "shooting",
    order: 3,
    title: "Striking with the laces",
    difficulty: "Beginner",
    summary:
      "Drive the ball with the hard top of your foot, toes down and ankle locked, instead of stubbing it with the toe.",
    minutes: 14,
    equipment: "A ball and a wall or goal with space behind it. A partner is optional and should stand to the side, never in front of the shot.",
    everydayAlternative:
      "A chain-link fence or a sturdy wall is enough. Put a chalk mark, tape, or a stuck leaf at knee height as the top of your target.",
    video: tutorial(
      "JxFVQd29IFg",
      "AYSO Coach's Corner: How to Coach Proper Shooting Technique",
      "AYSO Soccer",
    ),
    technique: [
      "Point the toes of the striking foot down and lock the ankle so you hit the ball with the laces, the firm bone on the top of the foot. The plant foot is beside the ball, the knee of the standing leg is slightly bent, and you approach from a small angle.",
      "The swing is short and quick. A long wild swing is harder to time. Strike the center of the ball and land leaning forward so the shot stays low. Your toe should not be the first thing that hits the ball.",
    ],
    tips: [
      "Feel the hard spot on the top of your foot with your hand before you start. That is the contact point.",
      "Keep the knee of the kicking leg pointing at the target. If the knee flips out, you will hit the ball with the side of the toes.",
      "Start with a still ball. A moving ball comes in a later lesson.",
    ],
    drill: drill("Low laces drive", false, [
      "From 8 yards, strike a still ball with the laces into a wall or goal. The target zone is everything below knee height.",
      "Take 8 shots with your stronger foot. After each one, reset the ball yourself. Small steps in, short swing.",
      "Take 6 shots with your weaker foot from 6 yards if 8 yards feels messy.",
      "If a shot goes above the knee mark, the next rep is slower, with your chest farther over the ball.",
    ]),
    soloAlternative: null,
    challenge:
      "With your laces, put 6 of 10 shots from 8 to 10 yards below knee height and on target, either between two goal markers or inside a doorway-sized area on a wall. At least 2 of the 6 are with the weaker foot. Toe-pokes do not count.",
    mistakes: [
      "Stabbing the ball with the toes, which hurts and sends it anywhere.",
      "Leaning back to swing harder, so the shot sails.",
      "Taking a huge run-up before the plant foot is reliable.",
    ],
  },
  {
    id: "shooting-4",
    category: "shooting",
    order: 4,
    title: "Accuracy before power",
    difficulty: "Intermediate",
    summary:
      "Name a target and hit it with the pace it needs. Add power only after the ball is going to the right place.",
    minutes: 15,
    equipment: "A ball and four small targets on a wall or in the corners of a goal.",
    everydayAlternative:
      "Stick four pieces of tape on a wall in a rectangle, or set four bottles as corner targets in front of a fence.",
    video: tutorial(
      "oOhohKfAKBE",
      "How To Improve Shooting Accuracy | The Ultimate Finishing Guide",
      "7mlc",
    ),
    technique: [
      "Pick an exact spot, not “the goal.” From close range, the side foot is usually the accurate tool. From a little farther, the laces can still be accurate if the swing stays controlled. The plant foot points at the spot you named.",
      "Use enough pace to reach the target, and no extra. If you miss, make the next swing smoother rather than harder. A shot that hits the target slowly is better practice than a shot that misses quickly.",
    ],
    tips: [
      "Say the target before you move: “top-left tape,” “right bottle,” “low center.”",
      "If you hit the right area but it was too soft to count as a game shot, keep the aim and add a little pace next time.",
      "Stop the session if you are only blasting. Reset with five soft side-foot shots.",
    ],
    drill: drill("Called targets", false, [
      "Mark four targets. Stand 8 yards away for side-foot shots.",
      "Point at a target, then hit it. Do not decide during the swing. Take 8 shots, a different target each time.",
      "Step back to 12 yards for 6 laces shots at the two lower targets only. The goal is to hit the lower target, not to make a sound on the wall.",
      "Write down hits and misses. A hit touches the target or passes within a ball-width of it.",
    ]),
    soloAlternative: null,
    challenge:
      "Hit 5 of 8 called targets. You must name the target before your approach. At least 3 of the hits are side-foot shots from 8 yards, and the ball must travel on the ground for those.",
    mistakes: [
      "Adding power after every miss.",
      "Changing the target in the middle of the swing.",
      "Practicing only the corner you already like.",
    ],
  },
  {
    id: "shooting-5",
    category: "shooting",
    order: 5,
    title: "Finishing after a first touch",
    difficulty: "Intermediate",
    summary:
      "Take one touch out of your feet into a shooting spot, then finish before the ball stops.",
    minutes: 15,
    equipment: "A ball and a goal or two markers, with a safe backstop.",
    everydayAlternative:
      "A wall goal made from tape works. If a partner is not around, you serve the ball to yourself with the setup touch.",
    video: null,
    technique: [
      "The first touch should put the ball a short step to the side or slightly ahead, into a lane where your plant foot can land. It should not come back under your body, and it should not race so far that you are stretching.",
      "The second touch is the shot you already trust: side foot if you want a corner, laces if you are driving a low ball. Look at the target before the first touch, then watch the ball as you strike it.",
    ],
    tips: [
      "Touch across your body when you want to open up a side-foot finish. Touch straight ahead when you want a laces strike.",
      "If the first touch is heavy, do not shoot off balance. That rep is a reset, not a wild swing.",
      "Count the touches out loud: “touch, shoot.” A third touch means the setup failed.",
    ],
    drill: drill("One touch, then finish", false, [
      "Start with the ball at your feet, 12 yards from the goal. Push it one touch toward the corner you want, about a step ahead and slightly wide.",
      "Plant and finish before the ball stops. Do 6 side-foot finishes this way.",
      "Do 6 more where the first touch is straight ahead and the shot is a low laces strike.",
      "A rep counts only if you shoot on the second touch and the ball ends between the posts or on the wall target.",
    ]),
    soloAlternative: null,
    challenge:
      "Finish 6 of 8 shots that use exactly one setup touch. The shot must be on target. At least 3 finishes are side-foot and 2 are laces. If you take a second setup touch, the rep does not count.",
    mistakes: [
      "Taking a touch backward, under your feet, and then rushing the shot.",
      "Hitting the shot while the ball is still too close to your plant foot.",
      "Watching the goal during contact and skying the finish.",
    ],
  },
  {
    id: "shooting-6",
    category: "shooting",
    order: 6,
    title: "Shooting with the weaker foot",
    difficulty: "Intermediate",
    summary:
      "Repeat your normal shooting shape on the weaker foot, from closer range, until the ball stays low and on target.",
    minutes: 14,
    equipment: "A ball and a goal or wall target. Start closer than you do with your stronger foot.",
    everydayAlternative:
      "Use the same shoe-marker goal as the earlier shooting lessons. Move it to 6 yards if the weaker foot needs a shorter shot.",
    video: tutorial(
      "ACa8mdbJkUY",
      "How To Shoot With Your Weak Foot (Improve Power + Accuracy)",
      "Progressive Soccer",
    ),
    technique: [
      "Copy the plant, the locked ankle, and the chosen surface. If you are placing the ball, use the inside of the weaker foot. If you are driving it, point the toes down and use the laces. Do not invent a new motion.",
      "Stand closer, swing smoother, and stop the rep when the shape breaks. Five clean weaker-foot shots teach more than twenty wild ones. Your stronger foot can take two warm-up shots, then stay out of the scoring.",
    ],
    tips: [
      "Set a shoe where the plant foot should land so the weaker side has a target for the step, not only for the shot.",
      "Keep the shots along the ground for this lesson. Lift comes from leaning back, which the weaker foot does quickly.",
      "Short sessions stick. Ten focused minutes beat a frustrated half hour.",
    ],
    drill: drill("Weaker-foot corners", false, [
      "From 6 yards, take 6 side-foot shots with the weaker foot. Call the corner before each one.",
      "Move to 8 yards and take 6 more. Still side foot, still on the ground.",
      "If 4 of those 6 hit the target, add 4 laces shots from 8 yards with the same foot, aiming only at the lower middle.",
      "Collect the balls yourself and reset. The walk back is the rest.",
    ]),
    soloAlternative: null,
    challenge:
      "Put 4 of 8 weaker-foot shots from 8 yards on the side you called, along the ground. The stronger foot cannot be used for a counted shot. Name the side before you plant.",
    mistakes: [
      "Skipping the plant-foot step because the weaker side feels awkward.",
      "Swinging harder instead of moving closer.",
      "Switching back to the stronger foot as soon as one shot misses.",
    ],
  },
  {
    id: "shooting-7",
    category: "shooting",
    order: 7,
    title: "Finishing while moving",
    difficulty: "Advanced",
    summary:
      "Run onto a ball that is rolling forward and finish it with small steps, a solid plant, and your eyes back on the ball.",
    minutes: 16,
    equipment: "A ball, space to dribble 15 yards, and a goal or wall target.",
    everydayAlternative:
      "A park path plus a shoe goal in front of a fence is enough. Keep people, windows, and roads out of the shooting line.",
    video: null,
    technique: [
      "As you arrive, take short quick steps so the plant foot can match the ball. The ball should be a little ahead of you, not stuck under your body and not so far that you lunge. Strike with the side foot or the laces, then keep moving through the shot.",
      "This is harder than a still ball because the plant has to land while everything is moving. If you reach, the shot is late. Slow the dribble on the last few yards until the timing is honest.",
    ],
    tips: [
      "Watch the ball for the last step. You already picked the target on the way in.",
      "If the ball is rolling too fast, take one touch to set it, then finish. That is the previous lesson. This lesson is for a ball you can strike in stride.",
      "Land forward, not on your heels.",
    ],
    drill: drill("Dribble and finish", false, [
      "Start 15 yards from the goal. Dribble at a jog with the ball a step ahead.",
      "Inside the last 8 yards, finish without letting the ball stop. Do 6 side-foot finishes across your body.",
      "Do 6 laces finishes where the ball is rolling straight away from you. Use small steps into the plant.",
      "A rep counts if you were jogging when you struck the ball and the shot is on target.",
    ]),
    soloAlternative: null,
    challenge:
      "Score 5 of 8 on-target finishes while jogging or running. A shot taken after the ball has stopped does not count. Include at least 2 side-foot and 2 laces finishes.",
    mistakes: [
      "Sprinting so fast that the plant foot lands behind the ball.",
      "Taking a huge last stride and toe-poking.",
      "Stopping the ball, settling, and then shooting. That is useful, but it is not this lesson.",
    ],
  },
  {
    id: "shooting-8",
    category: "shooting",
    order: 8,
    title: "Choosing placement and shot type",
    difficulty: "Advanced",
    summary:
      "Decide before the last step whether to place a side-foot shot or drive a laces shot, and aim at the space you chose.",
    minutes: 16,
    equipment: "A ball, a goal or wall with marked corners, and a short list of shot calls.",
    everydayAlternative:
      "Write the eight calls on paper scraps. A bottle in each corner of a shoe-goal shows the placement targets.",
    video: null,
    technique: [
      "Use the side foot when you are inside the box, you can see a corner, and the ball does not need a heavy strike. Use the laces when you are a little farther out and you still have a low target you can hit cleanly. If you are off balance, take a touch or pick the simpler side-foot pass into the net.",
      "Placement follows the goalkeeper’s space, even if the keeper is a cone. If the cone is near the right post, aim left. From an angle, the far post is usually the bigger space. Choose the spot, then the surface, then the plant. In that order.",
    ],
    tips: [
      "Make the choice while you are approaching, not as your foot hits the ball.",
      "A placed shot that hits the corner beats a driven shot that hits the middle.",
      "If the call is laces, still keep the ball below knee height in this drill. Power without a target is not the choice.",
    ],
    drill: drill("Shot calls", false, [
      "Make 8 paper calls, two of each: side-foot near post, side-foot far post, laces low center, laces left ground. Mix them up.",
      "From 10 yards, draw a call, say it, and shoot a still ball. Reset and draw the next one.",
      "The near post is the post closer to a cone you set on one side of the goal before the drill. Keep that cone in place so “near” and “far” stay consistent.",
      "After 8, shuffle and do them again only if you want extra work. The challenge uses the first 8.",
    ]),
    soloAlternative: null,
    challenge:
      "Match the called shot type and the called area on 6 of 8 shots from 10 yards. A side-foot call struck with the laces does not count, even if it goes in. Say the call before you plant.",
    mistakes: [
      "Defaulting to your favorite shot no matter what you called.",
      "Picking the surface and forgetting to pick the corner.",
      "Changing from a placed shot to a blast because the first try missed.",
    ],
  },
  {
    id: "defending-1",
    category: "defending",
    order: 1,
    title: "Defensive stance",
    difficulty: "Beginner",
    summary:
      "Set a low, side-on body with bent knees so you can move left, right, or backward without falling over.",
    minutes: 10,
    equipment: "Just your body and a line on the ground. A ball is optional for the mirror drill.",
    everydayAlternative:
      "Use a sidewalk crack, a hallway line, or a jump rope laid straight as your goal-side line.",
    video: null,
    technique: [
      "Turn slightly sideways, with one foot ahead of the other. Knees are bent, weight is on the balls of your feet, and your arms are loose for balance. You should be able to shuffle without crossing your feet.",
      "From this stance you can drop toward your own goal or step toward the ball. Standing straight with your feet together means the attacker’s first move beats you. The stance is the skill. You do not need to tackle anyone in this lesson.",
    ],
    tips: [
      "Keep your chest a little open so you can see the ball and the space behind you.",
      "Stay low enough that a light push on your shoulder would not tip you. Test it carefully with a parent if you want.",
      "Breathe out and stay quiet in your feet. Loud, heavy steps mean you are standing up.",
    ],
    drill: drill("Stance shuffles", false, [
      "Stand on a line in the stance. Shuffle four steps to your right, then four to your left, without crossing your feet. Do this for 30 seconds.",
      "Add a drop: shuffle, then take three small steps backward, then reset the stance. Do 8 drops.",
      "Put a ball one yard in front of you. Hold the stance while you tap the top of the ball back and forth with the sole, not as a dribble, just to keep your eyes active. 20 taps.",
      "Finish with 10 seconds of the lowest comfortable stance you can hold without your heels sitting down.",
    ]),
    soloAlternative: null,
    challenge:
      "Hold the side-on stance and complete 8 shuffle-and-drop sequences without crossing your feet or standing upright in the middle. Each sequence is 4 shuffles and 3 backward steps.",
    mistakes: [
      "Standing square and tall, with straight knees.",
      "Crossing the feet and tripping when you change direction.",
      "Leaning so far forward that a single step back makes you stumble.",
    ],
  },
  {
    id: "defending-2",
    category: "defending",
    order: 2,
    title: "Staying between the attacker and goal",
    difficulty: "Beginner",
    summary:
      "Keep your body on the goal side of the ball so the attacker has to go through you to get a shot.",
    minutes: 12,
    equipment: "A ball, a marker for the goal, and a marker for the attacker. A partner can dribble slowly if you have one.",
    everydayAlternative:
      "A backpack is the goal. A water bottle is the attacker. You are the defender between them.",
    video: null,
    technique: [
      "Imagine a string from the ball to the middle of your goal. You want to be on that string, closer to the goal than the ball is. If the ball moves left, you shuffle left and get back on the string. This is called being goal-side.",
      "You can be goal-side and still too far away, or close and not goal-side. Check both: Am I between the ball and the goal, and am I close enough to touch the ball with a long step if they push it past themselves?",
    ],
    tips: [
      "Point your back toward your own goal as a simple check, then return to a slightly side-on stance.",
      "If you get beaten on one side, run back to the string before you reach for the ball.",
      "Do not follow the attacker’s hips in a circle. Follow the line to the goal.",
    ],
    drill: drill("String to the goal", false, [
      "Set a backpack as the goal and a bottle as the attacker, 10 yards apart. Stand between them, closer to the backpack.",
      "Move the bottle to a new spot with your hands, then shuffle until you are back on the line between the bottle and the middle of the goal. Do 10 moves.",
      "Now dribble the ball yourself in a slow arc and, every few touches, step to the goal-side spot as if a teammate has the ball. Say “goal-side” when you arrive.",
      "If you have a partner, they walk with the ball and you stay between them and the backpack without trying to steal it. Switch after 1 minute.",
    ]),
    soloAlternative: null,
    challenge:
      "Move the attacker-marker to 8 different spots and get goal-side within 3 seconds each time, with at least one foot on the line between the marker and the goal. Miss the line and that spot does not count.",
    mistakes: [
      "Chasing the ball from the side and leaving the middle of the goal open.",
      "Backing up so far that you are in the goal before the attacker has even moved.",
      "Turning your back on the ball to run, then losing where it went.",
    ],
  },
  {
    id: "defending-3",
    category: "defending",
    order: 3,
    title: "Approaching under control",
    difficulty: "Beginner",
    summary:
      "Close the space quickly from far away, then slow down and get low as you arrive so the attacker cannot knock the ball past you.",
    minutes: 12,
    equipment: "A ball and two markers about 15 yards apart. A partner is useful but not required.",
    everydayAlternative:
      "A backpack is the attacker waiting with the ball. You start at a shoe 15 yards away.",
    video: tutorial(
      "vSUjixbVXF0",
      "Backyard Drills & Chills - 1v1 Defending",
      "Football Queensland",
    ),
    technique: [
      "If you are far from the ball, the first steps can be fast so the attacker does not get a free run. The last few steps are short and slow. Bend your knees as you arrive and take a side-on stance. A full-speed arrival runs you past the ball.",
      "A simple reminder is fast, then slow, then side, then low. You are there to delay them, not to crash into them. Stop about a yard away, close enough to matter and far enough to react.",
    ],
    tips: [
      "Shorten your steps before you think you need to. The slow-down starts early.",
      "Keep your eyes on the ball, not on the attacker’s face.",
      "If you arrive too hot, back up one step and reset. Do not stick out a foot to make up for it.",
    ],
    drill: drill("Fast then slow", false, [
      "Set a start marker and a ball 15 yards away. The ball is still, standing in for an attacker who is waiting.",
      "Run the first 10 yards, then chop your steps and arrive in a low side-on stance about one yard from the ball. Hold for 2 seconds. Walk back.",
      "Do 8 approaches. On the last 4, have the ball a step to the left or right so you must curve your angle and still finish goal-side of it.",
      "With a partner, they can walk forward as you arrive. You slow down earlier. They should not try to beat you yet.",
    ]),
    soloAlternative: null,
    challenge:
      "Finish 6 of 8 approaches in a low side-on stance, about one yard from the ball, without touching the ball or stumbling past it. The first part of each run should be quicker than the last three steps.",
    mistakes: [
      "Sprinting the whole way and diving in at the end.",
      "Approaching so slowly from the start that the attacker has time to look up and pick a side.",
      "Arriving square, with both feet together.",
    ],
  },
  {
    id: "defending-4",
    category: "defending",
    order: 4,
    title: "Jockeying and patience",
    difficulty: "Intermediate",
    summary:
      "Stay in your stance and shuffle with the attacker, waiting for a heavy touch instead of stabbing at the ball.",
    minutes: 14,
    equipment: "A ball and a path about 15 yards long toward a goal marker. A partner makes the drill real. The solo version uses a rolling ball.",
    everydayAlternative:
      "A backpack is the goal. You can jockey a ball you roll yourself, or shadow a friend who is dribbling without trying to score.",
    video: tutorial(
      "sYs-QLUerlc",
      "Start jockeying correctly #football #soccercoachingchannel #soccer #soccercoaching",
      "End Goal Coaching",
    ),
    technique: [
      "Jockeying means moving with the attacker while you stay low, side-on, and about a yard away. Your hips stay ready to change direction. If your hips face the ball square, one feint beats you.",
      "Patience is the point. You are allowed to not win the ball. If you delay the attacker until they play backward, run out of space, or take a heavy touch, you have defended well. Stabbing with the back foot is how attackers get behind you.",
    ],
    tips: [
      "Keep a distance where they cannot touch the ball past you in one small push, but you are not so close that you are on their toes.",
      "Shuffle. Do not cross your feet.",
      "Count silently to two before you even think about a poke. Most early pokes are impatience.",
    ],
    drill: drill("Shadow jockey", false, [
      "Set a goal marker. Start 12 yards in front of it with the ball.",
      "Roll the ball slowly toward one side and jockey with it for 8 shuffles, staying goal-side. Do not tackle the ball. Stop and reset.",
      "Do 6 rolls, alternating sides. On each one, say “wait” out loud twice before the rep ends.",
      "If a partner is with you, they dribble at walking speed toward the goal and you jockey for 10 seconds without trying to win the ball. Switch roles.",
    ]),
    soloAlternative: null,
    challenge:
      "Complete 6 jockeying reps of at least 8 shuffles each, staying goal-side and about a yard from the ball, without poking the ball. With a partner, 4 reps of 10 seconds without a tackle also completes the challenge.",
    mistakes: [
      "Standing tall as soon as the attacker slows down.",
      "Reaching with the back foot, which opens your legs and drops you off balance.",
      "Getting so close that a simple touch knocks the ball past your plant foot.",
    ],
  },
  {
    id: "defending-5",
    category: "defending",
    order: 5,
    title: "Showing an attacker away from danger",
    difficulty: "Intermediate",
    summary:
      "Angle your approach so the attacker’s easier path goes toward the sideline or away from the goal, not into the middle.",
    minutes: 14,
    equipment: "A ball, a goal marker, and a sideline made with a rope, a crack in the pavement, or a row of shoes.",
    everydayAlternative:
      "A hallway wall can be the sideline. A backpack is the goal. You defend so the dribble is forced toward the wall, not the open room.",
    video: tutorial(
      "fBmKmCPcWuk",
      "Teach Youth Soccer Players How to Defend!",
      "Coach Rory Soccer",
    ),
    technique: [
      "If you run straight at the attacker, you give them both sides. If you approach from the goal-side and slightly toward the middle, the path you leave open is the one toward the sideline. The sideline does not get beaten. It is extra help.",
      "Stay on the string between the ball and the goal while you take away the middle. You are showing a path, not chasing them in a circle. Once they are near the line, jockey. Do not lunge just because they are close to going out.",
    ],
    tips: [
      "Point them toward the nearer sideline, not across the whole field.",
      "If they cut back toward the middle, shuffle and take that lane away again.",
      "A pass backward from them is a good result. You do not have to win the ball yourself.",
    ],
    drill: drill("Show to the line", true, [
      "Partner needed. Mark a channel about 8 yards wide. One edge is the sideline. A small goal sits at the end, closer to the middle edge.",
      "Your partner dribbles from the other end at walking speed. You start goal-side and show them toward the sideline.",
      "They try to reach the goal. You try to keep them on the sideline side until they run out of space or pass the ball backward. No grabbing.",
      "Do 6 walks, then switch. A rep is successful if they never dribble through the middle of the channel with you stuck on the sideline.",
    ]),
    soloAlternative: drill("Channel alone", false, [
      "Mark the same channel. Dribble as the attacker for three touches, then put the ball down and jump to the defender’s spot.",
      "Set your body so the open path is toward the sideline. Touch the sideline with your foot, then touch the goal-side spot. That is one shape check.",
      "Do 8 shape checks from different balls you set yourself.",
      "Finish by walking the channel backward in your stance, always keeping the middle edge covered.",
    ]),
    challenge:
      "With a partner, succeed on 4 of 6 walking reps where they do not dribble through the middle. Alone, complete 8 shape checks where you can point to the sideline path you left open and still touch a goal-side spot with your foot.",
    mistakes: [
      "Running straight at the ball and giving away both sides.",
      "Showing them toward the middle because you approached from the sideline side.",
      "Lunging as soon as they get near the line and letting them cut inside.",
    ],
  },
  {
    id: "defending-6",
    category: "defending",
    order: 6,
    title: "Timing a standing tackle",
    difficulty: "Advanced",
    summary:
      "Stay on your feet and step in with the front foot only when the attacker pushes the ball too far from their body.",
    minutes: 15,
    equipment: "A ball and a partner for the live reps. The solo version uses a cone and a ball you push yourself. No sliding.",
    everydayAlternative:
      "Practice the step on grass, turf, or carpet. A shoe can be the ball for the solo timing rehearsal so you are not kicking a hard ball at a wall.",
    video: tutorial(
      "uVkpeXS6Byw",
      "Don't Dive In | 1 vs 1 | Defending Drill | Football/Soccer",
      "KS Performance",
    ),
    technique: [
      "Wait until the ball is farther from the attacker than it is from you. That usually happens right after they knock it past their own body. Step in with the front foot, ankle locked, and the inside of the foot through the middle of the ball. Your body stays up.",
      "This is a standing tackle. Do not slide, do not leave your feet, and do not go through the player. If you miss, get back into the jockey stance. Winning the ball while falling over just creates a loose ball. If the ball is close to their feet, keep jockeying.",
    ],
    tips: [
      "The cue is a heavy touch, their eyes down, or a tight space. If none of those are true, wait.",
      "Use the front foot. A reach with the back foot leaves you on one leg.",
      "Contact the ball, not the leg. If you cannot see the ball clearly, it is not time.",
    ],
    drill: drill("Win the heavy touch", true, [
      "Partner needed. They dribble slowly toward you in a 10-yard lane. You jockey.",
      "They play one purposely heavy touch every few steps. Only then may you step in with the front foot and win the ball while staying upright.",
      "If you step in early, the rep is a miss even if you touch the ball. Do 8 chances, then switch.",
      "Keep the pace at a jog or slower. This is timing practice, not a collision drill.",
    ]),
    soloAlternative: drill("Cone timing", false, [
      "Set a cone as the attacker. Place the ball tight against it, then a second spot one yard past the cone.",
      "Jockey in front of the cone for 4 shuffles. When you say “now,” the ball is only counted at the far spot, the heavy touch.",
      "Step in with the front foot and push that ball away with the inside of the foot, staying tall. Reset.",
      "Do 10 timed steps. If your back foot comes off the ground in a lunge, the rep does not count.",
    ]),
    challenge:
      "Win or clearly step through the ball on 5 timed reps while staying on your feet. With a partner, only a heavy touch may be tackled, and you need 5 clean wins in 8 chances. Alone, 5 of 10 cone steps must use the front foot without a slide or a back-foot lunge.",
    mistakes: [
      "Sliding or diving at the ball.",
      "Stabbing while the ball is still stuck on the attacker’s foot.",
      "Swinging through the person instead of the ball.",
    ],
  },
  {
    id: "defending-7",
    category: "defending",
    order: 7,
    title: "Tracking runs and positioning",
    difficulty: "Advanced",
    summary:
      "When a player without the ball runs toward your goal, stay goal-side of that runner instead of watching only the ball.",
    minutes: 14,
    equipment: "Three markers for runners, one marker for the ball, and one for the goal. A partner can make the runs if you have one.",
    everydayAlternative:
      "Shoes are runners. A backpack is the goal. You move your body, not the shoes, until you are goal-side of the shoe you chose.",
    video: null,
    technique: [
      "The ball is one problem. A runner behind you is another. Glance at the ball, then find the runner who is closest to your goal. Get goal-side of that runner, between them and the goal, close enough to touch them with a step if they receive a pass.",
      "Stay in a spot where you can see the ball and the runner at the same time, with your body open. If a new runner becomes more dangerous, leave the first one and get goal-side of the new one.",
    ],
    tips: [
      "Point at the runner you are tracking so the choice is obvious.",
      "Shuffle. Turning your back and sprinting blind is how you lose both the runner and the ball.",
      "If you are the closest defender to the ball, a teammate should track the runner. In solo practice, you play both jobs one at a time so you feel the difference.",
    ],
    drill: drill("Shoe runners", false, [
      "Set a goal. Place three shoes as runners: one wide left, one in the middle closer to goal, one wide right and deeper.",
      "Start near the ball marker, 15 yards from goal. Call the most dangerous shoe, the one closest to goal, and get goal-side of it within 3 seconds.",
      "Move that shoe to a new spot and repeat. Do 8 moves. The middle shoe should be the danger on at least 3 of them.",
      "With a partner, they walk as the runner and you stay goal-side for 20 seconds while a still ball sits nearby. You may look at the ball, but you cannot lose the runner.",
    ]),
    soloAlternative: null,
    challenge:
      "On 6 of 8 reps, identify the marker closest to goal and get both feet goal-side of it within 3 seconds, while still being able to point at the ball marker without turning all the way around.",
    mistakes: [
      "Ball-watching while a runner walks into the space behind you.",
      "Standing between the runner and the ball, so you are not goal-side when the pass arrives.",
      "Chasing the widest runner when another one is closer to the goal.",
    ],
  },
  {
    id: "defending-8",
    category: "defending",
    order: 8,
    title: "One-on-one defending decisions",
    difficulty: "Advanced",
    summary:
      "Choose whether to jockey, show them wide, track a runner, or step in, using the pictures you have already practiced.",
    minutes: 16,
    equipment: "A ball, a goal marker, and the six situations below. A partner can act them out at walking speed.",
    everydayAlternative:
      "Read each situation from the screen, set a backpack as the goal, and take the body shape that matches the choice. No extra gear.",
    video: tutorial(
      "aadebgx5nz4",
      "Stop Getting Beat In 1v1's | Defending Fundamentals",
      "Beestera Soccer",
    ),
    technique: [
      "Defending is a choice. If the attacker has the ball under control and open space, you jockey and stay goal-side. If they are drifting inside, you show them to the sideline. If the ball is on their foot but a teammate is running in behind, you track the runner when you are the free defender. If they push the ball too far, you use a standing tackle and stay up.",
      "A good result can be a backward pass, a throw-in, or a shot you delayed. You do not have to steal the ball every time. Say the choice before you move so you do not skip straight to a poke.",
    ],
    tips: [
      "Use this order: Am I goal-side? Am I showing them away from goal? Is the ball actually free to win?",
      "If you are unsure, jockey. Waiting is a decision.",
      "After a mistake, get goal-side again before you try anything clever.",
    ],
    drill: drill("Six situations", false, [
      "Read a situation, say the choice, and hold the matching stance for 3 seconds. The choices are jockey, show wide, track the runner, or standing tackle.",
      "Situation 1: the attacker faces you 25 yards from goal with the ball on their foot. Choice: jockey, goal-side. Do not tackle.",
      "Situation 2: they are near the right sideline and starting to come inside. Choice: show them back toward the sideline.",
      "Situation 3: they push the ball two yards past their body. Choice: standing tackle with the front foot, then get tall again.",
      "Situation 4: the ball is 15 yards to your left and a runner is sprinting toward your goal. Choice: track the runner, goal-side.",
      "Situation 5: they stop and look up, ball still close to their feet, teammate behind you is covering the goal. Choice: stay and jockey. Do not leave your feet.",
      "Situation 6: they have already gone past you. Choice: recover to the goal-side line first. Do not grab.",
      "Run all 6, then mix the order and run them again.",
    ]),
    soloAlternative: null,
    challenge:
      "Call the matching choice and show the body shape for all 6 situations, then repeat the set in a mixed order without missing more than 2. Check yourself against the choices written in the drill. This is a self-check, not a scored test.",
    mistakes: [
      "Trying to win the ball in every situation.",
      "Recovering with a grab or a slide after you are beaten.",
      "Forgetting the runner because the ball is more exciting to look at.",
    ],
  },
];

export const allSkillsLessonIds = [
  "passing-1",
  "dribbling-1",
  "shooting-1",
  "defending-1",
  "passing-2",
  "dribbling-2",
  "shooting-2",
  "defending-2",
  "passing-3",
  "dribbling-3",
  "shooting-3",
  "defending-3",
  "passing-4",
  "dribbling-4",
  "shooting-4",
  "defending-4",
  "passing-5",
  "dribbling-5",
  "shooting-5",
  "defending-5",
  "passing-6",
  "dribbling-6",
  "shooting-6",
  "defending-6",
  "passing-7",
  "dribbling-7",
  "shooting-7",
  "defending-7",
  "passing-8",
  "dribbling-8",
  "shooting-8",
  "defending-8",
] as const;

const lessonsById = new Map(lessons.map((lesson) => [lesson.id, lesson]));

function validateLessons() {
  if (lessons.length !== 32) {
    throw new Error(`Expected 32 lessons, found ${lessons.length}.`);
  }
  if (new Set(lessons.map((lesson) => lesson.id)).size !== 32) {
    throw new Error("Lesson ids must be unique.");
  }
  const categories: SkillCategory[] = ["passing", "dribbling", "shooting", "defending"];
  for (const category of categories) {
    const group = lessons.filter((lesson) => lesson.category === category);
    if (group.length !== 8) {
      throw new Error(`Expected 8 ${category} lessons.`);
    }
    const orders = new Set(group.map((lesson) => lesson.order));
    if (orders.size !== 8 || !group.every((lesson) => lesson.order >= 1 && lesson.order <= 8)) {
      throw new Error(`Each ${category} lesson needs an order from 1 to 8.`);
    }
  }
  if (new Set(allSkillsLessonIds).size !== 32) {
    throw new Error("All Skills ids must be unique.");
  }
  for (const id of allSkillsLessonIds) {
    if (!lessonsById.has(id)) {
      throw new Error(`Unknown All Skills lesson ${id}.`);
    }
  }
  for (const lesson of lessons) {
    if (lesson.tips.length !== 3) {
      throw new Error(`${lesson.id} needs 3 tips.`);
    }
    if (lesson.drill.steps.length < 3 || lesson.mistakes.length < 3) {
      throw new Error(`${lesson.id} needs a full drill and mistakes.`);
    }
    if (lesson.drill.requiresPartner && !lesson.soloAlternative) {
      throw new Error(`${lesson.id} needs a solo alternative.`);
    }
  }
}

validateLessons();

export function getLesson(id: string): Lesson | undefined {
  return lessonsById.get(id);
}

export function lessonsForCategory(category: SkillCategory): Lesson[] {
  return lessons
    .filter((lesson) => lesson.category === category)
    .sort((a, b) => a.order - b.order);
}

export function lessonsForPathway(pathway: PathwayId): Lesson[] {
  if (pathway === "all") {
    return allSkillsLessonIds.map((id) => {
      const lesson = lessonsById.get(id);
      if (!lesson) {
        throw new Error(`Missing lesson ${id}`);
      }
      return lesson;
    });
  }
  return lessonsForCategory(pathway);
}

export function nextLessonInPathway(pathway: PathwayId, currentId: string): Lesson | null {
  const list = lessonsForPathway(pathway);
  const index = list.findIndex((lesson) => lesson.id === currentId);
  if (index < 0 || index === list.length - 1) {
    return null;
  }
  return list[index + 1] ?? null;
}

export function firstIncomplete(list: readonly Lesson[], completed: ReadonlySet<string>): Lesson | null {
  return list.find((lesson) => !completed.has(lesson.id)) ?? null;
}

export function sectionLabel(pathway: PathwayId, index: number): string | null {
  if (pathway === "all") {
    if (index === 0) return "Basics";
    if (index === 8) return "Next level";
    if (index === 16) return "Harder";
    if (index === 24) return "Match play";
    return null;
  }
  if (index === 0) return "Beginner";
  if (index === 3) return "Intermediate";
  if (index === 6) return "Advanced";
  return null;
}
