import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchDragonBallCharacterById } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";

interface Props {
  params: { id: string };
}

export const useCharacterById = () => {
  const { id } = useParams() as Props["params"]; 
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const getCharacter = async () => {
      setLoading(true); 
      try {
        const data = await fetchDragonBallCharacterById(Number(id));
        if (data) {
          setCharacter(data);
        } else {
          setError("Personaje no encontrado.");
        }
      } catch (error) {
        console.log(error);
        setError("Error al obtener el personaje.");
      } finally {
        setTimeout(() => setLoading(false), 300);  
      }
    };

    getCharacter();
  }, [id]);

  return { character, loading, error };
};