# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Medium.destroy_all


medium_list = [
  
  {
    name: 'architecture',
    description: 'Architecture, the art and technique of designing and building, as distinguished from the skills associated with construction. The practice of architecture is employed to fulfill both practical and expressive requirements, and thus it serves both utilitarian and aesthetic ends.',
    img_url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=692&q=80',
  },
  {
    name: 'acting',
    description: 'Acting, the performing art in which movement, gesture, and intonation are used to realize a fictional character for the stage, for motion pictures, or for television.',
    img_url: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80',
  },
  {
    name: 'directing',
    description: 'Directing, the craft of controlling the evolution of a performance out of material composed or assembled by an author. The performance may be live, as in a theatre and in some broadcasts, or it may be recorded, as in motion pictures and the majority of broadcast material.',
    img_url: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  }, 
  {
    name: 'graphic design',
    description: 'Graphic design, the art and profession of selecting and arranging visual elements—such as typography, images, symbols, and colours—to convey a message to an audience.',
    img_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'photography',
    description: 'Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film ',
    img_url: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'drawing',
    description: 'Drawing, the art or technique of producing images on a surface, usually paper, by means of marks, usually of ink, graphite, chalk, charcoal, or crayon. Drawing as formal artistic creation might be defined as the primarily linear rendition of objects in the visible world, as well as of concepts, thoughts, attitudes, emotions, and fantasies given visual form, of symbols and even of abstract forms.',
    img_url: 'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1057&q=80',
  },
  {
    name: 'painting',
    description: 'Painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface.',
    img_url: 'https://cdn.shopify.com/s/files/1/1863/2463/products/image_c9f08c5c-7798-4d48-b295-4c08938bc0b3_530x@2x.jpg?v=1581890610',
  },
  {
    name: 'sculpture',
    description: 'Sculpture, an artistic form in which hard or plastic materials are worked into three-dimensional art objects. The designs may be embodied in freestanding objects, in reliefs on surfaces, or in environments ranging from tableaux to contexts that envelop the spectator.',
    img_url: 'https://images.unsplash.com/photo-1502006824196-081d88208529?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=636&q=80',
  },
  {
    name: 'ceramics',
    description: 'Ceramic art is art made from ceramic materials, including clay. It may take forms including artistic pottery, including tableware, tiles, figurines and other sculpture. As one of the plastic arts, ceramic art is one of the visual arts.',
    img_url: 'https://images.unsplash.com/photo-1529690840038-f38da8894ff6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'animation',
    description: 'Animation, the art of making inanimate objects appear to move. Animation is an artistic impulse that long predates the movies. History’s first recorded animator is Pygmalion of Greek and Roman mythology, a sculptor who created a figure of a woman so perfect that he fell in love with her and begged Venus to bring her to life.',
    img_url: 'https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'poetry',
    description: 'Poetry, literature that evokes a concentrated imaginative awareness of experience or a specific emotional response through language chosen and arranged for its meaning, sound, and rhythm.',
    img_url: 'https://images.unsplash.com/photo-1585834901549-f0f6f0115bea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
  },
  {
    name: 'dance',
    description: 'Dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself.',
    img_url: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'fashion design',
    description: 'Fashion design is the art of applying design, aesthetics and natural beauty to clothing and its accessories. It is influenced by cultural and social attitudes, and has varied over time and place.',
    img_url: 'https://images.unsplash.com/photo-1542790292-fdfbc3d343a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'gastronomy',
    description: 'Gastronomy is the study of the relationship between food and culture, the art of preparing and serving rich or delicate and appetizing food, the cooking styles of particular regions, and the science of good eating.',
    img_url: 'https://images.unsplash.com/photo-1541963058-f6a81ac19b70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'cocktails',
    description: 'The art, or skill, of preparing mixed drinks',
    img_url: 'https://thespillsheet.files.wordpress.com/2020/05/gay-republican.jpg?w=398',
  },
  {
    name: 'singing',
    description: 'Singing is the act of producing musical sounds with the voice and augments regular speech by the use of sustained tonality, rhythm, and a variety of vocal techniques.',
    img_url: 'https://images.unsplash.com/photo-1522863602463-afebb8886ab2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'instrumental performance',
    description: 'A musician is a person who plays a musical instrument or is musically talented. Anyone who composes, conducts, or performs music is referred to as a musician',
    img_url: 'https://images.unsplash.com/photo-1604479437409-ebc8edb48f9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'jewelry',
    description: 'Jewelry, objects of personal adornment prized for the craftsmanship going into their creation and generally for the value of their components as well. Throughout the centuries and from culture to culture, the materials considered rare and beautiful have ranged from shells, bones, pebbles, tusks, claws, and wood to so-called precious metals, precious and semiprecious stones, pearls, corals, enamels, vitreous pastes, and ceramics.',
    img_url: 'https://cdn.shopify.com/s/files/1/0144/9823/4432/files/IMG_8647_1000x.jpg?v=1583444951',
  },
  {
    name: 'cinematography',
    description: 'Cinematography, the art and technology of motion-picture photography. It involves such techniques as the general composition of a scene; the lighting of the set or location; the choice of cameras, lenses, filters, and film stock; the camera angle and movements; and the integration of any special effects.',
    img_url: 'https://images.unsplash.com/photo-1594872669068-6f682aaee1f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80',
  },
  {
    name: 'disc jockey',
    description: 'A disc jockey, more commonly abbreviated as DJ, is a person who plays recorded music for an audience.',
    img_url: 'https://images.unsplash.com/photo-1600102975337-e66752d32557?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjE4fHxkanxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'interior design',
    description: 'Interior design, planning and design of man-made spaces, a part of environmental design and closely related to architecture. Although the desire to create a pleasant environment is as old as civilization itself, the field of interior design is relatively new.',
    img_url: 'https://images.unsplash.com/photo-1551298698-66b830a4f11c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=658&q=80',
  },
  {
    name: 'woodworking',
    description: 'Woodworking is the activity or skill of making items from wood, and includes cabinet making (cabinetry and furniture), wood carving, joinery, carpentry, and woodturning.',
    img_url: 'https://images.unsplash.com/photo-1547609434-b732edfee020?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1027&q=80',
  },
  {
    name: 'web design',
    description: 'A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Go or Java in the server, and http for communications between client and server.',
    img_url: 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80',
  },
  {
    name: 'modeling',
    description: 'Fashion modeling refers to the practice of displaying trends in costume, beauty, and grooming using human subjects or the human form. These displays may be performed as live fashion shows; they may be photographed and placed on billboards or in magazines; or they may be recorded as commercials or as television programs.',
    img_url: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
  },
]

Medium.create(medium_list)