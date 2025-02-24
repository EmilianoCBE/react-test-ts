import { People } from '@/data/people';
import { addPeople } from '@/redux/states';
import { useEffect } from 'react';
import { PeopleTable } from './components';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPeople(People))
  }, [])

  return (
    <PeopleTable />
  )
}
