import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 
                                    bg-gradient-to-t
                                    from-black to-gray-400
                                    ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
            I’m a DJ who blends rhythm, emotion, and atmosphere into every set.
            Music has always been my language, and I use it to create unforgettable experiences. 
            </p>
            <p className="text-lg text-gray-700 mb-6">
            I specialize in crafting dynamic playlists that evolve with the mood of the crowd, and on Spotify I curate mixes that highlight fresh discoveries and timeless favorites. 
            </p>
            <p className="text-lg text-gray-700">
            Each playlist is designed with intention, flow, and storytelling in mind.
             My DJ sets focus on smooth transitions and energy that keeps audiences moving, drawing inspiration from electronic, house, indie, and global sounds. Whether live or digital, my goal is to connect people through music while continuously exploring new genres and artists to keep my sound evolving.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




