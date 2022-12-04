const themes = [
  {
    "name": "acme",
    "repo": "https://github.com/timoha/vis-acme",
    "path": "acme.lua",
    "image": "https://raw.githubusercontent.com/timoha/vis-acme/master/screenshot.png"
  },
  {
    "name": "citron",
    "repo": "https://github.com/kiwec/vis-citron",
    "path": "citron.lua",
    "image": "https://raw.githubusercontent.com/kiwec/vis-citron/master/screenshot.png"
  },
  {
    "name": "papercolor",
    "repo": "https://github.com/jceb/dotfiles",
    "path": "config/vis/themes/papercolor.lua",
    "image": "https://raw.githubusercontent.com/jceb/dotfiles/master/config/vis/themes/papercolor_vis_vim_side_by_side.png"
  },
  {
    "name": "seti",
    "repo": "https://github.com/erf/vis-seti",
    "path": "seti.lua",
    "image": "https://raw.githubusercontent.com/erf/vis-seti/master/screenshot.png"
  },
  {
    "name": "light",
    "repo": "https://github.com/erf/vis-minimal-theme",
    "path": "light.lua",
    "image": "https://user-images.githubusercontent.com/1562523/204408762-f9be19a1-9024-43aa-9429-d9472dee4ec2.png"
  },
  {
    "name": "dark",
    "repo": "https://github.com/erf/vis-minimal-theme",
    "path": "dark.lua",
    "image": "https://user-images.githubusercontent.com/1562523/204408770-20a82cd6-0540-48b5-9f17-bf3c0b24fb3f.png"
  },
  {
    "name": "light-clear",
    "repo": "https://github.com/erf/vis-minimal-theme",
    "path": "light-clear.lua",
    "image": "https://user-images.githubusercontent.com/1562523/204408762-f9be19a1-9024-43aa-9429-d9472dee4ec2.png"
  },
  {
    "name": "dark-clear",
    "repo": "https://github.com/erf/vis-minimal-theme",
    "path": "dark-clear.lua",
    "image": "https://user-images.githubusercontent.com/1562523/204408770-20a82cd6-0540-48b5-9f17-bf3c0b24fb3f.png"
  },
  {
    "name": "clear",
    "repo": "https://github.com/erf/vis-minimal-theme",
    "path": "clear.lua",
    "image": "https://user-images.githubusercontent.com/1562523/204667636-60de619b-8229-4f01-a540-99da73de6427.png"
  },
  {
    "name": "gruvbox",
    "repo": "https://github.com/samlwood/vis-gruvbox",
    "path": "gruvbox.lua",
    "image": "https://raw.githubusercontent.com/samlwood/vis-gruvbox/master/screenshot.png"
  },
  {
    "name": "base16-3024",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-3024.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-3024.png"
  },
  {
    "name": "base16-apathy",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-apathy.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-apathy.png"
  },
  {
    "name": "base16-ashes",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-ashes.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-ashes.png"
  },
  {
    "name": "base16-atelier-cave",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-cave.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-cave.png"
  },
  {
    "name": "base16-atelier-dune",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-dune.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-dune.png"
  },
  {
    "name": "base16-atelier-estuary",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-estuary.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-estuary.png"
  },
  {
    "name": "base16-atelier-forest",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-forest.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-forest.png"
  },
  {
    "name": "base16-atelier-heath",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-heath.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-heath.png"
  },
  {
    "name": "base16-atelier-lakeside",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-lakeside.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-lakeside.png"
  },
  {
    "name": "base16-atelier-plateau",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-plateau.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-plateau.png"
  },
  {
    "name": "base16-atelier-savanna",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-savanna.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-savanna.png"
  },
  {
    "name": "base16-atelier-seaside",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-seaside.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-seaside.png"
  },
  {
    "name": "base16-atelier-sulphurpool",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-atelier-sulphurpool.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-atelier-sulphurpool.png"
  },
  {
    "name": "base16-bespin",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-bespin.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-bespin.png"
  },
  {
    "name": "base16-brewer",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-brewer.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-brewer.png"
  },
  {
    "name": "base16-bright",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-bright.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-bright.png"
  },
  {
    "name": "base16-chalk",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-chalk.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-chalk.png"
  },
  {
    "name": "base16-circus",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-circus.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-circus.png"
  },
  {
    "name": "base16-codeschool",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-codeschool.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-codeschool.png"
  },
  {
    "name": "base16-cupcake",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-cupcake.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-cupcake.png"
  },
  {
    "name": "base16-darktooth",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-darktooth.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-darktooth.png"
  },
  {
    "name": "base16-default-dark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-default-dark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-default-dark.png"
  },
  {
    "name": "base16-default-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-default-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-default-light.png"
  },
  {
    "name": "base16-dracula",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-dracula.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-dracula.png"
  },
  {
    "name": "base16-eighties",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-eighties.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-eighties.png"
  },
  {
    "name": "base16-embers",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-embers.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-embers.png"
  },
  {
    "name": "base16-flat",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-flat.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-flat.png"
  },
  {
    "name": "base16-github",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-github.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-github.png"
  },
  {
    "name": "base16-google-dark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-google-dark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-google-dark.png"
  },
  {
    "name": "base16-google-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-google-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-google-light.png"
  },
  {
    "name": "base16-grayscale-dark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-grayscale-dark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-grayscale-dark.png"
  },
  {
    "name": "base16-grayscale-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-grayscale-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-grayscale-light.png"
  },
  {
    "name": "base16-green-screen",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-green-screen.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-green-screen.png"
  },
  {
    "name": "base16-gruvbox-dark-hard",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-gruvbox-dark-hard.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-hard.png"
  },
  {
    "name": "base16-gruvbox-dark-medium",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-gruvbox-dark-medium.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-medium.png"
  },
  {
    "name": "base16-gruvbox-dark-pale",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-gruvbox-dark-pale.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-pale.png"
  },
  {
    "name": "base16-gruvbox-dark-soft",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-gruvbox-dark-soft.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-dark-soft.png"
  },
  {
    "name": "base16-gruvbox-light-hard",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-gruvbox-light-hard.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-light-hard.png"
  },
  {
    "name": "base16-gruvbox-light-medium",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-gruvbox-light-medium.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-light-medium.png"
  },
  {
    "name": "base16-gruvbox-light-soft",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-gruvbox-light-soft.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-gruvbox-light-soft.png"
  },
  {
    "name": "base16-harmonic16-dark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-harmonic16-dark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-harmonic16-dark.png"
  },
  {
    "name": "base16-harmonic16-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-harmonic16-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-harmonic16-light.png"
  },
  {
    "name": "base16-hopscotch",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-hopscotch.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-hopscotch.png"
  },
  {
    "name": "base16-ir-black",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-ir-black.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-ir-black.png"
  },
  {
    "name": "base16-isotope",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-isotope.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-isotope.png"
  },
  {
    "name": "base16-london-tube",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-london-tube.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-london-tube.png"
  },
  {
    "name": "base16-macintosh",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-macintosh.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-macintosh.png"
  },
  {
    "name": "base16-marrakesh",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-marrakesh.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-marrakesh.png"
  },
  {
    "name": "base16-materia",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-materia.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-materia.png"
  },
  {
    "name": "base16-mexico-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-mexico-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-mexico-light.png"
  },
  {
    "name": "base16-mocha",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-mocha.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-mocha.png"
  },
  {
    "name": "base16-monokai",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-monokai.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-monokai.png"
  },
  {
    "name": "base16-nord",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-nord.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-nord.png"
  },
  {
    "name": "base16-oceanicnext",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-oceanicnext.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-oceanicnext.png"
  },
  {
    "name": "base16-ocean",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-ocean.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-ocean.png"
  },
  {
    "name": "base16-onedark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-onedark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-onedark.png"
  },
  {
    "name": "base16-paraiso",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-paraiso.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-paraiso.png"
  },
  {
    "name": "base16-phd",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-phd.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-phd.png"
  },
  {
    "name": "base16-pico",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-pico.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-pico.png"
  },
  {
    "name": "base16-pop",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-pop.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-pop.png"
  },
  {
    "name": "base16-railscasts",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-railscasts.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-railscasts.png"
  },
  {
    "name": "base16-rebecca",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-rebecca.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-rebecca.png"
  },
  {
    "name": "base16-seti-ui",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-seti-ui.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-seti-ui.png"
  },
  {
    "name": "base16-shapeshifter",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-shapeshifter.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-shapeshifter.png"
  },
  {
    "name": "base16-solar-flare",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-solar-flare.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-solar-flare.png"
  },
  {
    "name": "base16-solarized-dark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-solarized-dark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-solarized-dark.png"
  },
  {
    "name": "base16-solarized-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-solarized-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-solarized-light.png"
  },
  {
    "name": "base16-spacemacs",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-spacemacs.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-spacemacs.png"
  },
  {
    "name": "base16-summerfruit-dark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-summerfruit-dark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-summerfruit-dark.png"
  },
  {
    "name": "base16-summerfruit-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-summerfruit-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-summerfruit-light.png"
  },
  {
    "name": "base16-tomorrow",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-tomorrow.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-tomorrow.png"
  },
  {
    "name": "base16-tomorrow-night",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-tomorrow-night.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-tomorrow-night.png"
  },
  {
    "name": "base16-twilight",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-twilight.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-twilight.png"
  },
  {
    "name": "base16-unikitty-dark",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-unikitty-dark.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-unikitty-dark.png"
  },
  {
    "name": "base16-unikitty-light",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-unikitty-light.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-unikitty-light.png"
  },
  {
    "name": "base16-woodland",
    "repo": "https://github.com/pshevtsov/base16-vis",
    "path": "themes/base16-woodland.lua",
    "image": "https://raw.githubusercontent.com/pshevtsov/base16-vis/master/images/base16-woodland.png"
  },
  {
    "name": "peaksea",
    "repo": "https://gitlab.com/SZanko/vis-peaksea",
    "path": "peaksea.lua",
    "image": "https://gitlab.com/SZanko/vis-peaksea/-/raw/master/img/peaksea-dark.jpg"
  }
]