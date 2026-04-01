const RECIPES = {
  batch: [
    {
      name: "Salsa Chicken",
      subtitle: "Double batch · ~8 servings (~225g each) · Crockpot",
      time: "6–8 hrs",
      macros: [{l:"Calories",v:"~250"},{l:"Protein",v:"~50g"},{l:"Fiber",v:"~3g"},{l:"Carbs",v:"~8g"}],
      ingredients: [
        "6 lbs Member's Mark chicken breast",
        "2 jars Casa Mamita Chunky Salsa (16 oz each)",
        "2 packets Casa Mamita Taco Seasoning",
        "Juice of 2 limes",
      ],
      steps: [
        "Dump everything into the crockpot.",
        "Cook on LOW for 6–8 hours.",
        "Shred with two forks. Serve over rice, in wraps, or as a bowl.",
        "Freezes perfectly — no quality loss.",
      ],
      notes: "Per 8 oz serving. Salsa chicken and turkey taco meat freeze best — basically zero quality loss.",
    },
    {
      name: "White Chicken Chili",
      subtitle: "5 servings (~350g each) · Crockpot",
      time: "6–8 hrs",
      macros: [{l:"Calories",v:"~350"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~12g"},{l:"Carbs",v:"~25g"}],
      ingredients: [
        "2.5 lbs Member's Mark chicken breast",
        "2 cans Dakota's Pride Great Northern Beans (drained)",
        "1 can Casa Mamita Diced Green Chiles",
        "32 oz Chef's Cupboard Chicken Broth",
        "1 tsp each: cumin, garlic powder, onion powder",
        "4 oz Happy Farms Fat-Free Cream Cheese (last 30 min)",
      ],
      steps: [
        "Add everything except cream cheese to the crockpot.",
        "Cook on LOW for 6–8 hours.",
        "Shred chicken with two forks.",
        "Stir in cream cheese until melted and creamy.",
        "When reheating from frozen, add a splash of broth — it thickens up.",
      ],
      notes: "White chicken chili thickens when frozen. Add a splash of broth when reheating.",
    },
    {
      name: "Mississippi Pot Roast",
      subtitle: "Lean version · 5 servings (~225g each) · Crockpot",
      time: "8 hrs",
      macros: [{l:"Calories",v:"~280"},{l:"Protein",v:"~52g"},{l:"Fiber",v:"~1g"},{l:"Carbs",v:"~3g"}],
      ingredients: [
        "3 lb Member's Mark USDA Choice Angus Eye of Round Roast",
        "1 packet Hidden Valley Ranch Seasoning (Meijer)",
        "1 packet McCormick Au Jus Gravy Mix (Meijer)",
        "5–6 Tuscan Garden Pepperoncini + splash of jar juice",
        "NO BUTTER — skip it entirely",
      ],
      steps: [
        "Place roast in crockpot.",
        "Sprinkle both seasoning packets on top.",
        "Add pepperoncini and a splash of the jar juice.",
        "Cook on LOW for 8 hours until it shreds with a fork.",
      ],
      notes: "Eye of round is far leaner than chuck — keeps the macros tight without sacrificing flavor. Mississippi roast gets slightly softer after freezing — still tastes great.",
    },
    {
      name: "Turkey Taco Meat",
      subtitle: "5 servings (~250g each) · Stovetop + Crockpot",
      time: "4–6 hrs",
      macros: [{l:"Calories",v:"~310"},{l:"Protein",v:"~50g"},{l:"Fiber",v:"~8g"},{l:"Carbs",v:"~18g"}],
      ingredients: [
        "3 lbs Shady Brook Farms 93/7 Ground Turkey",
        "1 can Dakota's Pride Black Beans (drained)",
        "1 can Casa Mamita Diced Tomatoes w/ Green Chiles",
        "1 packet Casa Mamita Taco Seasoning",
      ],
      steps: [
        "Brown turkey in a skillet first — better texture, worth the extra step.",
        "Combine everything in the crockpot.",
        "Cook on LOW 4–6 hours.",
        "Use for bowls, lettuce wraps, or low-carb tortillas.",
      ],
      notes: "Brown the turkey first — better texture, worth the extra step. Freezes great.",
    },
  ],
  fresh: [
    {
      name: "High Protein Mac & Cheese",
      subtitle: "1 massive serving · Stovetop · ~15 min",
      time: "15 min",
      macros: [{l:"Calories",v:"~850"},{l:"Protein",v:"~105g"},{l:"Fiber",v:"~14g"},{l:"Carbs",v:"~52g"}],
      ingredients: [
        "3.5 oz dry Banza chickpea pasta (~half a box)",
        "2 cups low-fat cottage cheese, blended completely smooth",
        "¼ cup Fairlife fat-free milk (plus more to adjust)",
        "2 oz sharp cheddar, shredded",
        "4 tbsp nutritional yeast",
        "6 oz cooked shredded chicken breast",
        "1 tsp mustard powder + 1 tsp garlic powder",
        "½ tsp paprika + pinch of cayenne",
        "Salt + pepper",
        "1 bag Season's Choice steamable broccoli (recommended)",
        "OPTIONAL: 3 pinches (~¾ tsp) all-purpose flour — whisk into blended cottage cheese before heating for silkier sauce (+~10 cal)",
      ],
      steps: [
        "Cook Banza per box directions. Drain but don't rinse — starch helps sauce cling.",
        "Blend cottage cheese + Fairlife until completely smooth. No lumps. Most important step.",
        "Pour into saucepan over medium-low. Add cheddar, nooch, spices. Whisk until smooth, 3–4 min.",
        "Check consistency — should be almost pourable. Add Fairlife a splash at a time if too thick.",
        "Add shredded chicken and broccoli. Stir to coat and warm through, ~2 min.",
        "Kill the heat. Add pasta and fold everything together. Sauce should pool at the bottom.",
        "Eat immediately — sauce gets absorbed as it sits.",
      ],
      notes: "Keep heat on medium-low — too hot and the sauce seizes up. Add pasta last, off the heat. FLOUR TRICK: Whisk 3 small pinches of flour into the blended cottage cheese before heating for a silkier, more coating texture. Adds only ~10 calories.",
    },
    {
      name: "Refried Bean & Shrimp Bowl",
      subtitle: "1 serving · Stovetop · ~15 min",
      time: "15 min",
      macros: [{l:"Calories",v:"~520"},{l:"Protein",v:"~56g"},{l:"Fiber",v:"~14g"},{l:"Carbs",v:"~38g"}],
      ingredients: [
        "6 oz raw shrimp, peeled + deveined (31/40 count)",
        "1 tsp chili powder + 1 tsp garlic powder",
        "½ tsp cumin + ½ tsp paprika",
        "1 tbsp nutritional yeast (in shrimp rub)",
        "Juice of ½ lime",
        "[Bean Base]",
        "½ cup fat-free refried beans (Casa Mamita)",
        "¼ cup chicken broth",
        "3 tbsp nutritional yeast (in beans)",
        "½ bag Season's Choice riced cauliflower (frozen)",
        "[Toppings]",
        "2 tbsp Friendly Farms plain Greek yogurt",
        "2 tbsp Casa Mamita salsa + pickled jalapeños + lime",
      ],
      steps: [
        "Microwave cauliflower rice per bag. Press out moisture with paper towel — don't skip this.",
        "Pat shrimp completely dry. Toss with all spices and nutritional yeast.",
        "Screaming hot pan. Sear shrimp 2 min per side. Squeeze lime off heat. Set aside.",
        "Drop to medium-low. Add refried beans + broth, stir. Fold in cauliflower rice and nooch. Warm 2–3 min.",
        "Beans into the bowl, shrimp on top. Greek yogurt, salsa, jalapeños, lime to finish.",
      ],
      notes: "Nutritional yeast goes in both the shrimp rub AND the beans — adds cheesy umami depth without touching your macros. Squeeze out the cauliflower rice moisture or the beans go watery.",
    },
    {
      name: "Sesame-Ginger Seared Ahi",
      subtitle: "1 serving · Stovetop · ~20 min",
      time: "20 min",
      macros: [{l:"Calories",v:"~480"},{l:"Protein",v:"~74g"},{l:"Fiber",v:"~4g"},{l:"Carbs",v:"~14g"}],
      ingredients: [
        "6–8 oz ahi tuna steak (~1 inch thick)",
        "2 tbsp sesame seeds (white or mixed)",
        "2 tbsp nutritional yeast (in crust)",
        "1 tsp garlic powder + 1 tsp ground ginger",
        "½ tsp black pepper + pinch of salt",
        "[Dipping Sauce]",
        "2 tbsp low-sodium soy sauce",
        "1 tbsp nutritional yeast (in sauce)",
        "1 tsp fresh ginger, grated + 1 tsp rice vinegar",
        "½ tsp sesame oil + pinch of red pepper flakes",
        "[Veggies]",
        "1 bag Season's Choice stir fry blend",
        "1 tsp soy sauce + ½ tsp sesame oil + ½ tsp garlic powder",
      ],
      steps: [
        "Whisk all sauce ingredients including nutritional yeast. Set aside — thickens as it sits.",
        "Cook stir fry veggies per bag. Toss immediately with soy, sesame oil, garlic powder.",
        "Pat tuna dry. Combine garlic powder, ginger, nooch, pepper, salt. Press onto both sides. Press sesame seeds in firmly.",
        "Screaming hot pan. Tiny oil spray only. Sear 60–90 seconds per side — don't touch it.",
        "Pull, rest 1 minute, slice against the grain. Veggies on plate, tuna on top, sauce drizzled over.",
      ],
      notes: "Nutritional yeast in both the crust and sauce — adds umami depth and helps the crust adhere. Sesame oil in the sauce and veggies only, never in the pan — it burns at high heat.",
    },
    {
      name: "Mediterranean Seared Ahi Tuna",
      subtitle: "1 serving · Stovetop · ~20 min",
      time: "20 min",
      macros: [{l:"Calories",v:"~520"},{l:"Protein",v:"~75g"},{l:"Fiber",v:"~4g"},{l:"Carbs",v:"~38g"}],
      ingredients: [
        "6–8 oz ahi tuna steak (~1 inch thick)",
        "1 tsp garlic powder + 1 tsp dried oregano",
        "½ tsp dried thyme + ½ tsp paprika",
        "Salt + cracked black pepper",
        "Zest of ½ lemon + squeeze after searing",
        "[Yogurt Sauce]",
        "¼ cup Friendly Farms plain Greek yogurt",
        "½ tsp garlic powder + juice of ¼ lemon",
        "Pinch of salt + dried dill",
        "[Sides]",
        "1 bag Season's Choice green beans or asparagus",
        "½ cup jasmine rice",
      ],
      steps: [
        "Mix yogurt sauce: whisk together Greek yogurt, garlic powder, lemon juice, dill, and salt. Refrigerate while you cook.",
        "Cook rice. Steam veggies per bag directions.",
        "Pat tuna completely dry. Mix spices + lemon zest. Press firmly onto both sides.",
        "Screaming hot pan. No oil or tiny spray only. Sear 60–90 seconds per side max.",
        "Pull immediately. Squeeze lemon over the top. Rest 1 minute, slice against the grain.",
        "Rice down first, veggies alongside, tuna sliced on top, yogurt sauce drizzled or on the side.",
      ],
      notes: "Pan has to be screaming hot or you'll steam it instead of sear. Don't go past 90 seconds per side — ahi is meant to be rare in the center.",
    },
    {
      name: "Marinated Eye of Round Steak",
      subtitle: "1 serving · Stovetop + Oven · ~35 min (+ marinate)",
      time: "35 min",
      macros: [{l:"Calories",v:"~580"},{l:"Protein",v:"~65g"},{l:"Fiber",v:"~5g"},{l:"Carbs",v:"~52g"}],
      ingredients: [
        "6–8 oz eye of round steak, sliced ~¾ inch thick",
        "2 tbsp low-sodium soy sauce",
        "1 tbsp Worcestershire sauce",
        "1 tsp garlic powder + 1 tsp onion powder",
        "½ tsp black pepper + ½ tsp smoked paprika",
        "Juice of ¼ lemon",
        "[Pick Your Potato]",
        "6 oz baby potatoes, halved — OR — 6 oz sweet potato, cubed",
        "½ tsp garlic powder + ½ tsp smoked paprika + light cooking spray",
        "[Veggies]",
        "1 bag Season's Choice green beans or broccoli",
      ],
      steps: [
        "Combine marinade ingredients. Add steak, marinate at least 30 min — overnight is best.",
        "Preheat oven to 425°F. Toss potatoes with spices and oil spray. Roast 25–30 min, flip at 15.",
        "Pull steak from marinade. Pat lightly dry.",
        "Screaming hot pan. Sear 2–3 min per side for medium-rare.",
        "Rest 5 minutes — non-negotiable. Slice thin against the grain.",
        "Steam veggies while steak rests. Plate everything.",
      ],
      notes: "PICK YOUR POTATO: Baby potatoes = crispier, slightly lower carb. Sweet potato = more fiber, slightly higher carb. Same temp, same timing. Always slice against the grain and thin — this cut earns tenderness through time and technique, not fat.",
    },
    {
      name: "Blackened Cajun Salmon",
      subtitle: "1 serving · Stovetop + Oven · ~35 min",
      time: "35 min",
      macros: [{l:"Calories",v:"~620"},{l:"Protein",v:"~62g"},{l:"Fiber",v:"~5g"},{l:"Carbs",v:"~48g"}],
      ingredients: [
        "6–8 oz salmon fillet, skin on",
        "1 tsp smoked paprika + 1 tsp garlic powder",
        "½ tsp onion powder + ½ tsp cayenne",
        "½ tsp dried thyme + ½ tsp dried oregano",
        "½ tsp black pepper + ½ tsp salt",
        "[Yogurt Cool-Down Sauce]",
        "¼ cup Friendly Farms plain Greek yogurt",
        "Juice of ¼ lemon + ¼ tsp garlic powder + pinch of dill + salt",
        "[Pick Your Potato]",
        "6 oz baby potatoes, halved — OR — 6 oz sweet potato, cubed",
        "½ tsp smoked paprika + ½ tsp garlic powder + light cooking spray",
        "[Veggies]",
        "1 bag Season's Choice broccoli or green beans",
      ],
      steps: [
        "Preheat oven to 425°F. Toss potatoes with spices and oil spray. Roast 25–30 min, flip at 15.",
        "Make yogurt sauce: whisk together Greek yogurt, lemon juice, garlic powder, dill, and salt. Refrigerate while everything else cooks.",
        "Mix all blackening spices. Pat salmon completely dry. Press spice blend firmly onto flesh side.",
        "Cast iron or heavy pan over high heat until smoking. No oil or tiny spray.",
        "Salmon flesh-side down. Sear 2–3 min until deep dark crust — looks almost burnt. That's correct.",
        "Flip to skin side. Drop to medium. Cook 3–4 more min until just cooked through.",
        "Steam veggies while salmon finishes. Plate with yogurt sauce.",
      ],
      notes: "PICK YOUR POTATO: Baby potatoes = ~48g carbs. Sweet potato = ~58g carbs, more fiber. The crust should look dark, almost burnt — that's the blackening. Yogurt sauce is essential — cuts the heat and richness.",
    },
    {
      name: "Smash Burger",
      subtitle: "2 double smash burgers · Stovetop · ~15 min",
      time: "15 min",
      macros: [{l:"Calories",v:"~480"},{l:"Protein",v:"~52g"},{l:"Fiber",v:"~2g"},{l:"Carbs",v:"~28g"}],
      ingredients: [
        "½ lb 93/7 lean ground beef",
        "2 Kroger CarbMaster buns",
        "2 slices Kroger fat-free American cheese",
        "Ketchup + mustard",
        "Thin sliced dill pickles",
        "[Pick Your Season]",
        "Classic: salt, pepper, garlic powder",
        "Bold: smash burger seasoning blend",
        "Simple: salt + pepper only",
      ],
      steps: [
        "Divide beef into 4 equal balls — about 2 oz each. Don't overwork the meat.",
        "Get a flat pan or cast iron screaming hot over high heat. No oil needed.",
        "Season the tops of the balls right before they hit the pan.",
        "Place 2 balls in pan. Lay parchment over each. Smash hard and fast — press and hold 10 seconds.",
        "Peel parchment off. Cook undisturbed 60–90 seconds until deep brown crust forms.",
        "Flip once. Cheese on immediately. Cook 30–45 more seconds.",
        "Toast buns cut-side down in same pan, 30 seconds. Stack two patties per bun.",
      ],
      notes: "The crust is everything — don't move the patties after smashing. Pan must be screaming hot or you'll steam them. Two thin patties per burger always beats one thick one for crust-to-meat ratio.",
    },
    {
      name: "Southwest Chicken Salad",
      subtitle: "1 serving · No cook · 5 min with prepped chicken",
      time: "5 min",
      macros: [{l:"Calories",v:"~480"},{l:"Protein",v:"~58g"},{l:"Fiber",v:"~10g"},{l:"Carbs",v:"~38g"}],
      ingredients: [
        "6 oz salsa chicken or rotisserie chicken (from batch prep)",
        "3 cups romaine, chopped",
        "¼ cup black beans (drained, rinsed)",
        "¼ cup frozen corn, thawed",
        "¼ cup cherry tomatoes, halved",
        "2 tbsp Casa Mamita salsa",
        "2 tbsp red onion, thin sliced",
        "Handful of mini cucumbers, sliced",
        "Small handful Clancy's pork rinds, lightly crushed",
        "Pickled jalapeños (optional)",
        "[Lightened Honey Mustard Dressing]",
        "3 tbsp Friendly Farms plain Greek yogurt",
        "1 tsp yellow or dijon mustard",
        "1 tsp honey + splash of apple cider vinegar",
        "1–2 tbsp water to thin to drizzle consistency",
      ],
      steps: [
        "Make dressing: whisk together Greek yogurt, mustard, honey, and apple cider vinegar. Add water a splash at a time until it drizzles easily — more mustard for tang, more honey for sweet.",
        "Build the bowl — romaine, beans, corn, tomatoes, cucumber, red onion, salsa.",
        "Pull chicken from fridge, slice or shred, drop on top.",
        "Drizzle dressing. Crush pork rinds fine and scatter over top like croutons right before eating.",
      ],
      notes: "5 minute meal when batch prep is stocked. Crush pork rinds fine — big chunks just sit there. Add them last minute or they go soft. The salsa in the base replaces half the dressing you'd normally need.",
    },
    {
      name: "High Protein Cottage Cheese Pizza",
      subtitle: "1 serving · Oven · ~40 min",
      time: "40 min",
      macros: [{l:"Calories",v:"~520"},{l:"Protein",v:"~58g"},{l:"Fiber",v:"~4g"},{l:"Carbs",v:"~22g"}],
      ingredients: [
        "[Crust]",
        "¾ cup low-fat cottage cheese, blended completely smooth",
        "1 whole egg",
        "3 tbsp nutritional yeast + ½ tsp garlic powder + ½ tsp Italian seasoning + pinch of salt",
        "[Pick Your Sauce]",
        "Red: 3 tbsp Cento passata + ¼ tsp garlic powder + ¼ tsp Italian seasoning",
        "White: 3 tbsp Greek yogurt + ¼ tsp garlic powder + 1 tsp nooch + pinch dried basil",
        "[Toppings]",
        "1 oz turkey pepperoni",
        "¼ cup mushrooms, sliced thin",
        "¼ cup bell peppers, thin sliced",
        "2 tbsp red onion, thin sliced",
        "2 tbsp crumbled feta + 1 oz shredded mozzarella",
      ],
      steps: [
        "Preheat oven to 400°F. Line baking sheet with parchment, spray lightly.",
        "Blend cottage cheese completely smooth. Whisk in egg, nooch, and spices.",
        "Pour onto parchment, spread thin (~¼ inch). Thinner = crispier.",
        "Bake 25–28 minutes until golden and set. Don't rush — underbaked crust won't hold toppings.",
        "Add sauce of choice, then veggies, cheese, and feta. Pepperoni last.",
        "Back in oven 8–10 min. Broil 2 min for color. Rest 3–4 min before slicing.",
      ],
      notes: "Nutritional yeast goes in both the crust AND the white sauce — acts as parmesan substitute. Blend cottage cheese fully or lumps won't bake out. Rest before slicing — non-negotiable.",
    },
    {
      name: "Meatless Bolognese",
      subtitle: "2 servings (~400g each) · Stovetop · ~35 min",
      time: "35 min",
      macros: [{l:"Calories",v:"~580"},{l:"Protein",v:"~42g"},{l:"Fiber",v:"~22g"},{l:"Carbs",v:"~92g"}],
      ingredients: [
        "1 cup brown or green lentils, rinsed",
        "2 cups mushrooms, finely chopped",
        "1 can (14 oz) Cento passata",
        "½ cup low-sodium chicken or veggie broth",
        "½ medium onion, finely diced + 3 cloves garlic, minced",
        "1 tsp Italian seasoning + 1 tsp smoked paprika",
        "4 tbsp nutritional yeast (+ more on top as parmesan)",
        "1 tsp Worcestershire sauce + red pepper flakes + salt + pepper",
        "OPTIONAL: 3 tbsp blended cottage cheese (stirred in off heat for creaminess)",
        "[Pasta]",
        "3.5 oz dry Banza chickpea pasta",
      ],
      steps: [
        "Cook lentils per package until just tender — don't overcook. Drain and set aside.",
        "Medium-high heat. Cook onion 3–4 min. Add garlic, cook 1 more min.",
        "Add mushrooms. Cook 5–6 min until they brown — don't rush, browning is where flavor comes from.",
        "Add passata, broth, Worcestershire, spices, and nooch. Stir to combine.",
        "Fold in lentils. Simmer on low 15–20 min until thickened.",
        "If going creamy, stir in blended cottage cheese off the heat.",
        "Cook Banza per box. Drain, don't rinse. Toss with sauce. Top with extra nooch.",
      ],
      notes: "Brown the mushrooms properly — pale soggy mushrooms kill the dish. Nooch goes in the sauce AND on top as parmesan. With cottage cheese: ~620 cal | ~48g protein.",
    },
    {
      name: "Italian White Bean & Spinach Soup",
      subtitle: "2 servings (~450g each) · Stovetop · ~30 min",
      time: "30 min",
      macros: [{l:"Calories",v:"~380"},{l:"Protein",v:"~28g"},{l:"Fiber",v:"~18g"},{l:"Carbs",v:"~62g"}],
      ingredients: [
        "2 cans Dakota's Pride Great Northern Beans (drained, rinsed)",
        "1 can (14 oz) Cento passata",
        "2 cups low-sodium chicken or veggie broth",
        "3 cups fresh or frozen spinach",
        "4 cloves garlic, minced + ½ medium onion, diced",
        "1 tsp Italian seasoning + ½ tsp smoked paprika",
        "¼ tsp red pepper flakes",
        "4 tbsp nutritional yeast (+ more on top as parmesan)",
        "1 tsp Worcestershire sauce",
        "Squeeze of lemon (at the end) + salt + cracked pepper",
      ],
      steps: [
        "Medium heat. Cook onion 3–4 min. Add garlic, cook 1 more min.",
        "Add passata, broth, Worcestershire, Italian seasoning, paprika, red pepper flakes. Bring to simmer.",
        "Add one can of beans whole. Mash second can roughly with a fork — thickens the broth naturally.",
        "Stir in nutritional yeast. Simmer 15–20 min on low.",
        "Add spinach in last 2 minutes. Stir until wilted.",
        "Squeeze lemon in at the end. Taste and adjust. Ladle into bowls, hit with extra nooch on top.",
      ],
      notes: "Mash one can of beans — makes it brothy but still substantial. Nooch in the pot AND on top. Lemon at the very end only — brightens everything. Don't add spinach too early or it goes grey.",
    },
    {
      name: "Cajun Crispy Chicken Thighs",
      subtitle: "1 serving (2 thighs) · Stovetop + Oven · ~35 min",
      time: "35 min",
      macros: [{l:"Calories",v:"~580"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~3g"},{l:"Carbs",v:"~42g"}],
      ingredients: [
        "2 bone-in skin-on chicken thighs",
        "1 tsp smoked paprika + 1 tsp garlic powder",
        "½ tsp onion powder + ½ tsp cayenne",
        "½ tsp dried thyme + ½ tsp dried oregano",
        "Salt + cracked black pepper",
        "[Nooch Rice]",
        "½ cup jasmine rice, cooked in low-sodium chicken broth (same ratio as water)",
        "2 tbsp nutritional yeast — stir in off heat",
        "Pinch garlic powder + salt",
        "[Veggies]",
        "1 bag Season's Choice steamable broccoli or green beans",
      ],
      steps: [
        "Pat thighs completely dry. Season generously, getting under the skin.",
        "Preheat oven to 425°F. Start rice in chicken broth.",
        "Oven-safe pan over medium-high. No oil — skin renders its own fat.",
        "Thighs skin-side down. Press firmly 30 sec. Cook undisturbed 7–8 min until deep golden.",
        "Flip. Transfer pan to oven skin-side up. Roast 20–22 min to 165°F internal.",
        "When rice comes off heat, stir in nooch, garlic powder, salt.",
        "Rest thighs 5 min. Serve over nooch rice with veggies.",
      ],
      notes: "Dry the skin completely before seasoning. Skin-down first always — never let skin sit in rendered fat in the oven. Don't move during sear or crust tears. Nooch rice cooked in broth tastes almost buttery.",
    },
    {
      name: "Asian Glazed Chicken Thighs",
      subtitle: "1 serving (2 thighs) · Stovetop + Oven · ~35 min",
      time: "35 min",
      macros: [{l:"Calories",v:"~600"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~3g"},{l:"Carbs",v:"~48g"}],
      ingredients: [
        "2 bone-in skin-on chicken thighs",
        "1 tsp garlic powder + 1 tsp ground ginger + salt + pepper",
        "[Glaze — Apply Last 2–3 Min Only]",
        "2 tbsp low-sodium soy sauce",
        "1 tsp honey + ½ tsp sesame oil",
        "½ tsp rice vinegar + ½ tsp garlic powder",
        "[Nooch Rice]",
        "½ cup jasmine rice, cooked in low-sodium chicken broth",
        "2 tbsp nutritional yeast — stir in off heat",
        "[Veggies]",
        "1 bag Season's Choice stir fry blend",
      ],
      steps: [
        "Pat thighs completely dry. Season with garlic powder, ginger, salt, pepper.",
        "Preheat oven to 425°F. Start rice in chicken broth.",
        "Oven-safe pan over medium-high. No oil.",
        "Thighs skin-side down. Press firmly 30 sec. Cook undisturbed 7–8 min until deep golden.",
        "Flip. Transfer to oven skin-side up. Roast 18–20 min to 165°F.",
        "Mix glaze. Brush over skin in last 2–3 min. Broil briefly until caramelized.",
        "Stir nooch into hot rice. Rest thighs 5 min. Plate with stir fry veggies.",
      ],
      notes: "Glaze goes on in the last 2–3 minutes ONLY — apply earlier and the sugars burn. Sesame oil in the glaze only, never in the pan.",
    },
  ],
  tenderloin: [
    {
      name: "Garlic Herb Pork Tenderloin",
      subtitle: "1 serving · Sear + Oven · ~25 min",
      time: "25 min",
      macros: [{l:"Calories",v:"~320"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~4g"}],
      ingredients: [
        "6–8 oz pork tenderloin",
        "1 tsp garlic powder",
        "½ tsp dried rosemary + ½ tsp dried thyme",
        "½ tsp dried oregano + salt + cracked pepper",
        "[Yogurt Sauce]",
        "¼ cup Friendly Farms plain Greek yogurt",
        "½ tsp garlic powder + squeeze of lemon + pinch of dill + pinch of salt",
      ],
      steps: [
        "Preheat oven to 400°F. Season tenderloin on all sides.",
        "Oven-safe pan over high heat. Sear all sides 2 min per side until browned.",
        "Transfer pan to oven. Roast 15–18 min until 145°F internal.",
        "Make yogurt sauce while resting: whisk together Greek yogurt, garlic powder, lemon juice, and dill. Rest tenderloin 5 minutes, slice against the grain, serve with sauce alongside.",
      ],
      notes: "145°F internal is done — a slight blush of pink is safe and correct. Pushing to 160°F+ dries it out completely. Rest every time before slicing or the juice runs out.",
    },
    {
      name: "Asian Glazed Pork Tenderloin",
      subtitle: "1 serving · Sear + Oven + Glaze · ~25 min",
      time: "25 min",
      macros: [{l:"Calories",v:"~360"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~16g"}],
      ingredients: [
        "6–8 oz pork tenderloin",
        "1 tsp garlic powder + 1 tsp ground ginger + salt + pepper",
        "[Glaze — Apply Last 3 Min Only]",
        "2 tbsp low-sodium soy sauce",
        "1 tsp honey + ½ tsp sesame oil",
        "½ tsp rice vinegar + ½ tsp garlic powder",
      ],
      steps: [
        "Preheat oven to 400°F. Season with garlic powder, ginger, salt, pepper.",
        "Oven-safe pan over high heat. Sear all sides 2 min per side.",
        "Transfer to oven. Roast 12 min.",
        "Mix glaze. Brush over tenderloin. Broil 2–3 min until caramelized. Don't apply glaze earlier.",
        "Rest 5 minutes. Slice against the grain.",
      ],
      notes: "Same glaze rule as the chicken thighs — apply in the last 2–3 minutes only or it burns. Sesame oil in the glaze only, never in the pan.",
    },
    {
      name: "Cajun Blackened Tenderloin",
      subtitle: "1 serving · Thin sliced + Screaming hot sear · ~15 min",
      time: "15 min",
      macros: [{l:"Calories",v:"~310"},{l:"Protein",v:"~46g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~4g"}],
      ingredients: [
        "6–8 oz pork tenderloin, sliced into ¾ inch medallions",
        "1 tsp smoked paprika + ½ tsp cayenne",
        "1 tsp garlic powder + ½ tsp dried thyme",
        "½ tsp dried oregano + ½ tsp black pepper + salt",
        "[Sriracha Yogurt Sauce]",
        "¼ cup Friendly Farms plain Greek yogurt",
        "1 tsp sriracha + squeeze of lime + ½ tsp garlic powder + pinch of salt",
      ],
      steps: [
        "Slice tenderloin into ¾ inch medallions. Pat completely dry.",
        "Mix all spices and press firmly onto both sides of each medallion.",
        "Cast iron screaming hot. No oil or tiny spray.",
        "Sear medallions 90 seconds per side — don't move them. Dark crust is correct.",
        "Make sauce: whisk together Greek yogurt, sriracha, lime juice, garlic powder, and salt. Plate medallions immediately and drizzle sauce over.",
      ],
      notes: "Slicing into medallions = faster cook time and more crust surface area per bite. Same blackening rules as the salmon — the crust should look almost burnt.",
    },
    {
      name: "Mediterranean Pork Tenderloin",
      subtitle: "1 serving · Oven only · ~25 min",
      time: "25 min",
      macros: [{l:"Calories",v:"~330"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~3g"}],
      ingredients: [
        "6–8 oz pork tenderloin",
        "Zest + juice of ½ lemon",
        "1 tsp dried oregano + ½ tsp dried thyme",
        "1 tsp garlic powder + salt + cracked pepper",
        "—",
        "TO SERVE: 2 tbsp crumbled feta + fresh lemon squeeze",
      ],
      steps: [
        "Rub tenderloin with lemon juice, zest, and all spices. Let sit 20 min at room temperature.",
        "Preheat oven to 425°F.",
        "Roast 20–22 min until 145°F internal.",
        "Rest 5 min. Slice against the grain. Top with crumbled feta and fresh lemon.",
      ],
      notes: "The 20 minute rest in the lemon rub before roasting makes a big difference — the acid tenderizes and flavors penetrate deeper.",
    },
    {
      name: "Smoky BBQ Pork Tenderloin",
      subtitle: "1 serving · Grill or grill pan · ~20 min",
      time: "20 min",
      macros: [{l:"Calories",v:"~340"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~8g"}],
      ingredients: [
        "6–8 oz pork tenderloin",
        "1 tsp smoked paprika + 1 tsp garlic powder",
        "½ tsp onion powder + ½ tsp cumin",
        "½ tsp brown sugar substitute + salt + pepper",
        "—",
        "2 tbsp sugar-free BBQ sauce (last 2 min ONLY)",
      ],
      steps: [
        "Season tenderloin with dry rub. Let sit 10 min.",
        "Grill or grill pan over high heat.",
        "Grill, turning every 3–4 min, until 145°F — about 15 min total.",
        "Brush BBQ sauce on in last 2 min. Let caramelize, don't burn.",
        "Rest 5 min. Slice against the grain.",
      ],
      notes: "Sugar-free BBQ sauce goes on last 2 minutes only. The dry rub does the heavy lifting. Keep turning every 3–4 min for even cooking and grill marks on all sides.",
    },
    {
      name: "Mustard Crusted Pork Tenderloin",
      subtitle: "1 serving · Overnight marinade + Oven · ~25 min",
      time: "25 min + overnight",
      macros: [{l:"Calories",v:"~335"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~6g"}],
      ingredients: [
        "6–8 oz pork tenderloin",
        "2 tbsp dijon mustard",
        "1 tsp garlic powder + 1 tsp honey",
        "1 tsp apple cider vinegar",
        "½ tsp dried thyme + salt + pepper",
      ],
      steps: [
        "Mix mustard, garlic powder, honey, vinegar, thyme, salt, pepper. Coat tenderloin completely.",
        "Refrigerate overnight — minimum 2 hours, overnight is better.",
        "Preheat oven to 400°F.",
        "Roast 20–22 min until 145°F. The mustard forms a natural crust as it roasts.",
        "Rest 5 min. Slice against the grain.",
      ],
      notes: "Mix the marinade the night before — zero prep the next day. Don't wipe off the marinade before roasting. The mustard crust that forms in the oven is the whole point.",
    },
  ],
  breakfast: [
    {
      name: "Southwest Egg Mug",
      subtitle: "1 serving · Microwave · ~3 min",
      time: "3 min",
      macros: [{l:"Calories",v:"~220"},{l:"Protein",v:"~20g"},{l:"Fiber",v:"~1g"},{l:"Carbs",v:"~4g"}],
      ingredients: [
        "3 whole eggs OR 4 egg whites + 1 whole egg",
        "2 tbsp Casa Mamita salsa",
        "2 tbsp Casa Mamita diced green chiles",
        "¼ tsp cumin + ¼ tsp garlic powder + salt + pepper",
        "1 oz shredded cheddar (optional, +~110 cal)",
        "1 tbsp Friendly Farms plain Greek yogurt",
        "[Optional Protein Add-In]",
        "2 oz leftover turkey taco meat or salsa chicken from batch prep",
      ],
      steps: [
        "Spray a large mug lightly with cooking spray.",
        "Crack eggs into mug. Add salsa, green chiles, spices. Whisk with a fork.",
        "Add any leftover taco meat or salsa chicken if using.",
        "Microwave 90 seconds. Stir from edges inward.",
        "Microwave another 30–60 seconds until just set. Top and eat from the mug.",
      ],
      notes: "With taco meat + cheese: ~390 cal | ~38g protein. Use a big mug — eggs puff up. Pull it when it still looks slightly underdone — carryover heat finishes it.",
    },
    {
      name: "Mediterranean Egg Mug",
      subtitle: "1 serving · Microwave · ~3 min",
      time: "3 min",
      macros: [{l:"Calories",v:"~260"},{l:"Protein",v:"~23g"},{l:"Fiber",v:"~2g"},{l:"Carbs",v:"~5g"}],
      ingredients: [
        "3 whole eggs OR 4 egg whites + 1 whole egg",
        "1 handful fresh or frozen spinach",
        "1 tbsp sun-dried tomatoes, chopped",
        "2 tbsp crumbled feta",
        "¼ tsp garlic powder + ¼ tsp dried oregano + salt + pepper",
      ],
      steps: [
        "Spray a large mug lightly with cooking spray.",
        "Add spinach first and microwave 20 seconds to wilt.",
        "Add eggs and everything else. Whisk with a fork.",
        "Microwave 90 seconds. Stir from edges inward.",
        "Microwave another 30–45 seconds until just set. Top with extra feta.",
      ],
      notes: "Wilt the spinach first — skipping this leaves too much moisture and makes the eggs watery.",
    },
    {
      name: "Smoky & Savory Egg Mug",
      subtitle: "1 serving · Microwave · ~3 min",
      time: "3 min",
      macros: [{l:"Calories",v:"~350"},{l:"Protein",v:"~34g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~4g"}],
      ingredients: [
        "3 whole eggs OR 4 egg whites + 1 whole egg",
        "2 oz turkey bacon, chopped (precooked or cook first)",
        "1 oz sharp cheddar, shredded",
        "½ tsp smoked paprika + ¼ tsp garlic powder + ¼ tsp onion powder",
        "Salt + pepper",
        "1 tbsp Friendly Farms plain Greek yogurt (topping)",
      ],
      steps: [
        "Spray a large mug lightly with cooking spray.",
        "Whisk eggs with all spices in the mug.",
        "Fold in turkey bacon and half the cheddar.",
        "Microwave 90 seconds. Stir from edges inward.",
        "Microwave 30–45 more seconds until just set. Top with remaining cheddar and Greek yogurt.",
      ],
      notes: "Highest protein of the four egg mugs. Use precooked turkey bacon to keep prep under 3 minutes total.",
    },
    {
      name: "Italian Egg Mug",
      subtitle: "1 serving · Microwave · ~4 min",
      time: "4 min",
      macros: [{l:"Calories",v:"~370"},{l:"Protein",v:"~40g"},{l:"Fiber",v:"~1g"},{l:"Carbs",v:"~6g"}],
      ingredients: [
        "3 whole eggs OR 4 egg whites + 1 whole egg",
        "2 oz Italian-seasoned ground turkey (browned ahead)",
        "2 tbsp Cento passata or marinara",
        "1 oz shredded mozzarella",
        "¼ tsp Italian seasoning + ¼ tsp garlic powder + salt + pepper",
        "Fresh basil (optional)",
      ],
      steps: [
        "Spray a large mug with cooking spray.",
        "Whisk eggs with Italian seasoning, garlic powder, salt, pepper.",
        "Add turkey and passata. Stir to combine.",
        "Microwave 90 seconds. Stir from edges inward.",
        "Microwave 30–45 more seconds until just set. Top with mozzarella, microwave 15 sec to melt. Basil on top.",
      ],
      notes: "Brown a batch of Italian-seasoned turkey at the start of the week — then this mug takes under 3 minutes every morning.",
    },
    {
      name: "Berry Vanilla Smoothie Bowl",
      subtitle: "1 serving · Blender · ~5 min",
      time: "5 min",
      macros: [{l:"Calories",v:"~420"},{l:"Protein",v:"~48g"},{l:"Fiber",v:"~4g"},{l:"Carbs",v:"~52g"}],
      ingredients: [
        "1 cup Friendly Farms nonfat Greek yogurt",
        "½ cup frozen mixed berries",
        "1 scoop vanilla whey or casein protein",
        "¼ cup Fairlife fat-free milk (add slowly)",
        "½ tsp vanilla extract + 1 tsp honey",
        "[Toppings]",
        "2 tbsp granola",
        "½ cup fresh berries",
        "1 tsp honey drizzle",
      ],
      steps: [
        "Blend yogurt, berries, protein, milk, vanilla, honey until thick and smooth. Add milk slowly — keep it spoonable.",
        "Pour into a wide bowl.",
        "Add toppings in sections across the top.",
        "Eat immediately — it melts fast.",
      ],
      notes: "Freeze Greek yogurt in ice cube trays the night before for an extra thick base. Less milk = thicker — always add slowly.",
    },
    {
      name: "Tropical Smoothie Bowl",
      subtitle: "1 serving · Blender · ~5 min",
      time: "5 min",
      macros: [{l:"Calories",v:"~440"},{l:"Protein",v:"~46g"},{l:"Fiber",v:"~5g"},{l:"Carbs",v:"~54g"}],
      ingredients: [
        "1 cup Friendly Farms nonfat Greek yogurt",
        "½ cup frozen mango chunks",
        "¼ cup frozen pineapple",
        "1 scoop vanilla whey or casein protein",
        "¼ cup Fairlife fat-free milk (add slowly)",
        "½ tsp vanilla extract",
        "[Toppings]",
        "2 tbsp shredded coconut",
        "Small handful Clancy's pork rinds, crushed fine",
        "½ cup fresh fruit (mango, pineapple, or kiwi)",
        "PBfit drizzle: 1 tbsp PBfit mixed thin with water",
      ],
      steps: [
        "Blend yogurt, mango, pineapple, protein, milk, vanilla until thick and smooth. Add milk slowly.",
        "Pour into a wide bowl.",
        "Add toppings in sections across the top.",
        "Eat immediately.",
      ],
      notes: "Crushed pork rinds on a tropical bowl sounds wrong but works — the crunch and slight saltiness contrasts the sweet perfectly with zero carbs. Crush them fine so they distribute evenly.",
    },
  ],
  snacks: [
    {
      name: "Spicy Sriracha Greek Yogurt Dip",
      subtitle: "2 servings · No cook · 5 min + 15 min rest",
      time: "5 min",
      macros: [{l:"Calories",v:"~90"},{l:"Protein",v:"~15g"},{l:"Fiber",v:"~0g"},{l:"Carbs",v:"~7g"}],
      ingredients: [
        "1 cup Friendly Farms plain Greek yogurt",
        "1–2 tsp sriracha (adjust to heat preference)",
        "1 tsp garlic powder + ½ tsp onion powder",
        "½ tsp smoked paprika",
        "1 tbsp nutritional yeast",
        "Squeeze of lime + salt to taste",
        "[Dippers]",
        "Mini cucumbers + cherry tomatoes",
        "Clancy's pork rinds + bell pepper strips",
      ],
      steps: [
        "Whisk all ingredients together until fully combined.",
        "Refrigerate at least 15 minutes — flavor develops as it sits.",
        "Taste and adjust heat, salt, and lime before serving.",
        "Serve cold with dippers alongside.",
      ],
      notes: "Don't skip the rest time — flat straight off the whisk. Nooch adds savory depth. Pork rinds as dippers = zero carb chip experience.",
    },
    {
      name: "Fruity Coconut Energy Bites",
      subtitle: "~10 bites (~30g each) · No cook · 10 min + 30 min chill",
      time: "10 min",
      macros: [{l:"Per Bite Cal",v:"~85"},{l:"Protein",v:"~5g"},{l:"Fiber",v:"~1g"},{l:"Carbs",v:"~12g"}],
      ingredients: [
        "1 cup rolled oats",
        "3 tbsp PBfit powder",
        "2 tbsp honey",
        "¼ cup dried cranberries or raisins",
        "3 tbsp shredded coconut",
        "1 scoop vanilla casein protein",
        "2–3 tbsp Fairlife fat-free milk (to bind)",
        "Pinch of salt",
      ],
      steps: [
        "Mix oats, PBfit, honey, dried fruit, coconut, casein, and salt together.",
        "Add milk a splash at a time until mixture just holds when pressed.",
        "Roll into balls about the size of a golf ball.",
        "Refrigerate 30 minutes to set. Store in fridge up to a week.",
      ],
      notes: "Use casein not whey — casein binds better when cold. Add milk very slowly — too much and they won't firm up. Make a batch on Sunday, grab 2–3 throughout the week.",
    },
    {
      name: "Solo High Protein Snack Board",
      subtitle: "1 serving · No cook · 5 min",
      time: "5 min",
      macros: [{l:"Calories",v:"~520"},{l:"Protein",v:"~58g"},{l:"Fiber",v:"~4g"},{l:"Carbs",v:"~28g"}],
      ingredients: [
        "2 oz Member's Mark beef jerky",
        "3–4 string cheese sticks",
        "½ cup Friendly Farms Greek yogurt sriracha dip (see recipe)",
        "Mini cucumbers + cherry tomatoes",
        "Small handful Clancy's pork rinds",
        "6–8 Great Gherkins dill pickle spears",
        "1 tbsp PBfit mixed thin with honey as dipping sauce",
      ],
      steps: [
        "Pull everything from the fridge and pantry.",
        "Arrange on a plate — dips in center, dippers and proteins around the outside.",
        "Mix PBfit with just enough water to make a thin drizzleable sauce. Add honey and stir.",
        "Graze.",
      ],
      notes: "Blueprint, not a strict recipe — swap in whatever you have prepped. The sriracha dip makes 2 servings so make it ahead and keep it in the fridge all week.",
    },
  ],
  dessert: [
    {
      name: "Chocolate PB Mousse",
      subtitle: "3 servings (~133g each) or 1 full meal (~400g) · No cook · 10 min",
      time: "10 min",
      macros: [{l:"Batch Cal",v:"~560"},{l:"Batch Protein",v:"~54g"},{l:"Fiber/Batch",v:"~2g"},{l:"Per Serving",v:"~187 cal"}],
      ingredients: [
        "2 cups Fairlife Fat Free Milk",
        "1 box (1.4 oz) Jell-O Sugar-Free Chocolate Instant Pudding Mix",
        "1 scoop ON Gold Standard Casein, Chocolate Supreme",
        "2 tbsp PBfit Powder",
        "1 tsp vanilla extract",
        "1 cup Cool Whip Free",
      ],
      steps: [
        "Whisk Fairlife, pudding mix, casein, PBfit, and vanilla together until smooth — about 2 minutes.",
        "Refrigerate 5 minutes until it starts to set.",
        "Fold in Cool Whip gently until fully combined.",
        "Back in the fridge 10 more minutes, or eat right away.",
      ],
      notes: "Use casein, not whey. Casein thickens when cold — makes it creamy and mousse-like. Whey makes it chalky and thin. Tastes like a Reese's peanut butter cup.",
    },
    {
      name: "Banana Protein Ice Cream",
      subtitle: "1 serving (~250g) · Blender · 5 min + optional 1 hr freeze",
      time: "5 min",
      macros: [{l:"Calories",v:"~320"},{l:"Protein",v:"~28g"},{l:"Fiber",v:"~4g"},{l:"Carbs",v:"~52g"}],
      ingredients: [
        "2 frozen bananas, broken into chunks",
        "1 scoop vanilla casein protein",
        "¼ cup Fairlife fat-free milk",
        "½ tsp vanilla extract",
        "Pinch of salt",
      ],
      steps: [
        "Blend frozen banana chunks until they start to cream — scrape down sides as needed.",
        "Add casein, milk, vanilla, and salt. Blend until completely smooth and thick.",
        "Eat immediately as soft serve, or freeze 1 hour for scoopable texture.",
      ],
      notes: "Use casein not whey — creamier texture when frozen. Freeze bananas when ripe and spotty for maximum sweetness.",
    },
    {
      name: "Jocko Molk Banana Cream Ice Cream",
      subtitle: "1 serving (~260g) · Blender · 5 min + 30–60 min freeze",
      time: "5 min",
      macros: [{l:"Calories",v:"~340"},{l:"Protein",v:"~30g"},{l:"Fiber",v:"~4g"},{l:"Carbs",v:"~52g"}],
      ingredients: [
        "2 frozen bananas, broken into chunks",
        "1 scoop Jocko Molk Banana Cream protein",
        "¼ cup Fairlife fat-free milk",
        "Pinch of salt",
        "Optional: 1 tbsp PBfit for a banana PB version",
      ],
      steps: [
        "Blend frozen banana chunks until they start to cream — scrape down sides as needed.",
        "Add Molk protein, milk, and salt. Blend until completely smooth.",
        "Eat immediately as soft serve, or freeze 30–60 minutes for scoopable texture.",
      ],
      notes: "Molk uses a whey/casein blend — slightly less thick than pure casein out of the blender, so freeze 30–60 min for best scoopable texture. The banana cream flavor makes it taste like actual banana ice cream.",
    },
    {
      name: "PB Chocolate Protein Brownies",
      subtitle: "9 brownies (~45g each) · Oven · ~30 min",
      time: "30 min",
      macros: [{l:"Per Brownie Cal",v:"~110"},{l:"Protein",v:"~9g"},{l:"Fiber",v:"~3g"},{l:"Carbs",v:"~14g"}],
      ingredients: [
        "1 can (15 oz) black beans, drained and rinsed",
        "2 whole eggs",
        "3 tbsp PBfit powder",
        "3 tbsp cocoa powder",
        "2 tbsp honey",
        "1 scoop ON Gold Standard Casein, Chocolate Supreme",
        "1 tsp vanilla extract",
        "½ tsp baking powder + pinch of salt",
        "Optional: sugar-free chocolate chips on top",
      ],
      steps: [
        "Preheat oven to 350°F. Spray an 8x8 pan lightly.",
        "Drain and rinse black beans. Blend until completely smooth — this is the brownie base.",
        "Add eggs, PBfit, cocoa, honey, casein, vanilla, baking powder, salt. Mix until combined.",
        "Pour into pan. Top with chocolate chips if using.",
        "Bake 20–22 min until center is just set.",
        "Cool completely before cutting — they firm up as they cool.",
      ],
      notes: "Blend the black beans completely smooth — any lumps and the texture is off. Don't cut them hot. Store in the fridge — they get fudgier after a day.",
    },
    {
      name: "Mixed Berry Honey Yogurt Bark",
      subtitle: "4 servings (~120g each) · Freezer · 10 min + 3–4 hr freeze",
      time: "10 min",
      macros: [{l:"Calories",v:"~160"},{l:"Protein",v:"~18g"},{l:"Fiber",v:"~1g"},{l:"Carbs",v:"~22g"}],
      ingredients: [
        "2 cups Friendly Farms nonfat Greek yogurt",
        "1 scoop vanilla casein protein",
        "2 tbsp honey (+ extra to drizzle)",
        "½ tsp vanilla extract",
        "½ cup mixed berries (fresh or frozen, thawed)",
        "2 tbsp granola",
        "Shredded coconut (optional)",
      ],
      steps: [
        "Mix yogurt, casein, honey, and vanilla until completely smooth.",
        "Spread onto a parchment-lined baking sheet ~¼ inch thick.",
        "Scatter berries and granola across the top. Drizzle extra honey.",
        "Freeze 3–4 hours until completely solid.",
        "Break into chunks. Store in zip bag in freezer — eat straight from frozen.",
      ],
      notes: "Make Sunday, in the freezer all week. Break into whatever size chunks you want — smaller pieces easier to portion. Weigh at ~120g per serving. Thaw 2 min if too hard.",
    },
    {
      name: "Cinnamon Vanilla Protein Mug Cake",
      subtitle: "1 serving · Microwave · ~5 min",
      time: "5 min",
      macros: [{l:"Calories",v:"~310"},{l:"Protein",v:"~32g"},{l:"Fiber",v:"~2g"},{l:"Carbs",v:"~34g"}],
      ingredients: [
        "3 tbsp oat flour (blend rolled oats) or all-purpose flour",
        "1 scoop vanilla casein protein",
        "1 tsp cinnamon + ½ tsp baking powder + pinch of salt",
        "1 whole egg",
        "3 tbsp Fairlife fat-free milk",
        "1 tsp honey + ½ tsp vanilla extract",
        "[Topping]",
        "2 tbsp Friendly Farms plain Greek yogurt",
        "Drizzle of honey",
      ],
      steps: [
        "Mix all dry ingredients in a large mug — flour, casein, cinnamon, baking powder, salt.",
        "Add egg, milk, honey, vanilla. Stir until just combined — don't overmix.",
        "Microwave 60–75 seconds until just set in the center.",
        "Top immediately with Greek yogurt and honey drizzle.",
      ],
      notes: "Don't overmix — just stir until combined or it gets tough. Pull at 60 seconds and check — every microwave is different. Use a big mug, it rises. Greek yogurt melts slightly into the warm cake like frosting.",
    },
  ],
};

// ── RENDER ──────────────────────────────────────────────────
let currentSection = 'batch';
let currentRecipeIndex = null;

function renderGrid(section) {
  const grid = document.getElementById(`grid-${section}`);
  const recipes = RECIPES[section];
  grid.innerHTML = recipes.map((r, i) => `
    <div class="recipe-card" onclick="showRecipe('${section}', ${i})">
      <div class="recipe-card-num">Recipe ${String(i+1).padStart(2,'0')}</div>
      <div class="recipe-card-name">${r.name}</div>
      <div class="recipe-card-meta">${r.subtitle}</div>
      <div class="recipe-card-macros">
        ${r.macros.map((m,mi) => `<span class="macro-pill${mi===1?' protein':''}">${m.l}: ${m.v}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function showRecipe(section, index) {
  const recipe = RECIPES[section][index];
  const detail = document.getElementById(`detail-${section}`);
  const list = document.getElementById(`list-${section}`);

  detail.innerHTML = `
    <button class="back-btn" onclick="hideRecipe('${section}')">← Back to ${section.charAt(0).toUpperCase()+section.slice(1)}</button>
    <div class="recipe-title">${recipe.name}</div>
    <div class="recipe-subtitle">${recipe.subtitle}</div>
    <div class="macro-bar">
      ${recipe.macros.map(m => `
        <div class="macro-item">
          <div class="macro-val">${m.v}</div>
          <div class="macro-lbl">${m.l}</div>
        </div>
      `).join('')}
    </div>
    <div class="recipe-body">
      <div>
        <div class="col-label">Ingredients</div>
        <ul class="ingredient-list">
          ${recipe.ingredients.map(ing => {
            if (ing.startsWith('[') && ing.endsWith(']')) {
              return `<li class="section-label">${ing.slice(1,-1)}</li>`;
            }
            return `<li>${ing}</li>`;
          }).join('')}
        </ul>
      </div>
      <div>
        <div class="col-label">Method</div>
        <ol class="step-list">
          ${recipe.steps.map((s,i) => `
            <li>
              <span class="step-num">${i+1}</span>
              <span>${s}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    </div>
    ${recipe.notes ? `
      <div class="notes-box">
        <strong>✦ Notes</strong>
        ${recipe.notes}
      </div>
    ` : ''}
  `;

  list.classList.add('hidden');
  detail.classList.add('active');
}

function hideRecipe(section) {
  const detail = document.getElementById(`detail-${section}`);
  const list = document.getElementById(`list-${section}`);
  detail.classList.remove('active');
  detail.innerHTML = '';
  list.classList.remove('hidden');
}

function switchTab(section) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  // Show selected
  document.getElementById(`tab-${section}`).classList.add('active');
  event.target.classList.add('active');
  currentSection = section;

  // Render grid if not already done
  if (document.getElementById(`grid-${section}`).innerHTML === '') {
    renderGrid(section);
  }
}

// Init
Object.keys(RECIPES).forEach(s => renderGrid(s));