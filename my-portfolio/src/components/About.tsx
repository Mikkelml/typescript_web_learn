import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black pt-20
                                    ">
      <div className="container mx-auto px-6">
        <h2 className="text-7xl font-bold text-center mb-12 text-white">Sportify</h2>
        <div className="max-w-3xl mx-auto">
          <div>
            <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/artist/2iWkuTijtgxovgCiuYHdWL?utm_source=generator&theme=0"
                  width="100%" height="352" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy">

              </iframe>
          </div>

          {/* <div className="bg-gray-300 rounded-lg p-8">
            <p className="text-lg text-white-700 mb-6">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;




