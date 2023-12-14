import React from 'react'

const ViewPlaylist = () => {
  return (
    <>
      <div className='text-white'>
        <div className='text-2xl font-semibold h-45'>Spotify Playlists</div>
            <div className='w-full rounded-lg'>
            <Card title={"Today's Top hits"} description={"Tats MCRae is on Top of the Hottest 50!"}/>
            </div>
      </div>
    </>
  )
}

const Card = ({title,description,}) => {
  return (
    <>
    <div>
             <div className='w-1/6 bg-gray-10 p-4 bg-opacity-100 rounded-lg'>
                <div>
                <div className='mb-4'>
                    <img className='w-full rounded-md' alt='Song thumbnail' src='https://i.scdn.co/image/ab67706f00000002c3a09ef16753dd88a8bc09bd'/>
                </div>
                <div className='Title text-white'>{title}</div>
                <div className="description text-gray-500">{description}</div>
                </div>
             </div>
    </div>
    </>
  )
}
export  {ViewPlaylist, Card}

