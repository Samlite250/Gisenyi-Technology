export type TrainingProgramme = {
  title: string
  shortTitle: string
  description: string
  image: string
  icon: string
}

export const trainingProgrammes: TrainingProgramme[] = [
  { title: 'Microsoft Office Package', shortTitle: 'MS Office Package', description: 'Practical Word, Excel, PowerPoint and everyday office productivity skills.', icon: 'gear', image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=85' },
  { title: 'Software Development', shortTitle: 'Software Development', description: 'Build practical software, web applications and programming foundations.', icon: 'code', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85' },
  { title: 'Graphic Design', shortTitle: 'Graphic Design', description: 'Develop skills in visual communication, branding and digital design.', icon: 'palette', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85' },
  { title: 'Photography', shortTitle: 'Photography', description: 'Learn camera operation, composition, lighting and professional image production.', icon: 'camera', image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=900&q=85' },
  { title: 'Videography', shortTitle: 'Videography', description: 'Plan, capture and edit effective video content for digital platforms.', icon: 'camera', image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=85' },
  { title: 'Computer Hardware & Software Maintenance', shortTitle: 'Hardware & Maintenance', description: 'Diagnose, maintain and repair computer hardware and software systems.', icon: 'gear', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85' },
  { title: 'Artificial Intelligence Skills', shortTitle: 'AI Skills', description: 'Understand modern AI tools and apply them responsibly to practical work.', icon: 'bulb', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85' },
  { title: 'Networking & CCTV Camera Installation', shortTitle: 'Networking & CCTV', description: 'Configure networks and learn practical CCTV installation and support.', icon: 'gear', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85' },
  { title: 'Entrepreneurship & Marketing', shortTitle: 'Entrepreneurship & Marketing', description: 'Develop business ideas, customer understanding and practical marketing skills.', icon: 'users', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85' },
  { title: 'Online Government Services', shortTitle: 'Online Services', description: 'Practical assistance and skills for IREMBO, RRA, RDB, RURA and related platforms.', icon: 'code', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=85' },
]

export const internshipTracks = [
  {
    level: 'Technical & vocational students',
    note: 'Internship placements for NIT Level 3, Level 4 and Level 5 learners.',
    areas: ['Software Development', 'Networking', 'Computer Applications', 'Accounting'],
  },
  {
    level: 'University students',
    note: 'Practical university-level internship experience with guided project work.',
    areas: ['Software Engineering', 'Computer Engineering', 'Networking', 'Industrial IT'],
  },
]
