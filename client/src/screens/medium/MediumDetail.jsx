import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneMedium } from '../../services/media'
import { getOneUser } from '../../services/users';

export default function MediumDetail(props) {
  const [medium, setMedium] = useState(null);

  const { id } = useParams();
  

  useEffect(() => {
    const fetchMedium = async () => {
      const mediumData = await getOneMedium(id);
      setMedium(mediumData);
    }
    fetchMedium(id);
  }, [id])


  return (
    <>
      <h1>{medium?.name}</h1>
      <p>{medium?.posts[0].subject}</p>
      <p>{medium?.posts[0].content}</p>
    </>
  )
}