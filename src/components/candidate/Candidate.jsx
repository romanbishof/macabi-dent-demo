import React, { useState } from 'react';
import './Candidate.css'
import images from '../../assets/index'
import CandidateTable from '../candidateTable/CandidateTable';
import DialogComp from '../dialogComponent/DialogComp';
import { useDispatch } from 'react-redux';
import { dialogOpen } from '../../redux/TableDataSlice';


const Candidate = () => {

    const [searchInput, setSearchInput] = useState('')
    // const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    
    const handleClickOpen = () => {
        dispatch(dialogOpen())
      };
    
    return (
        <div className='Candidate'>

            <div className="Candidate-currentPage">

                <img src={images.BackArrow} alt="back arrow" />
                <p>{`מועמדים`}</p>

            </div>
            <div className="Candidate-wrapper">

                <div className="Candidate-wrapper_searchBar">

                    <img src={images.SearchImage} alt="searchIcon" />
                    <input id='searchBar' type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='חיפוש מועמד'/>

                </div>

                <div className="Candidate-wrapper_addNewUser">

                    <button onClick={handleClickOpen}>{`הוספת מועמד חדש +`}</button>

                </div>

            </div>

            <div className="Candidate-table">

                <CandidateTable searchFilter = {searchInput}/>
                
            </div>

            <DialogComp/>
        </div>
    );
};

export default Candidate;