import React, {useState} from 'react';
import './BasicDetails.css'

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import StyledButton from '../../styledComponents/StyledButton';

import { v4 as uuidv4 } from 'uuid';


import './BasicDetails.css';



const BasicDetails = () =>{

    const [profession, setProfession] = useState('')
    const [age, setAge] = useState(18)
    const [financiallyDependent, setFinanciallyDependent] = useState('')
    const [monthyIncome, setMonthyIncome] = useState(500)
    const [increaseInIncome, setIncreaseInIncome] = useState(20)
    const [dialogOpen, setDialogOpen] = useState(false)

    let professionList = ["Govt. Job", "Private Job", "Own Business", "Large Business"]

    const handleAgeChange = (event)=>{
        setAge(event.target.value)
    }

    const handleFinanciallyDependentChange = (event)=>{
        setFinanciallyDependent(event.target.value)
    }

    const incomeValueText = (value)=>{
        return `'$' ${value}`
    }
    
    const handleIncomeChange = (event, val)=>{
        setMonthyIncome(val)
    }

    const handleIncomeChangeInput = (event)=>{
        setMonthyIncome(event.target.value)
    }

    const handleIncreaseInIncomeChange = (event, val)=>{
        setIncreaseInIncome(val)
    }

    const handleIncreaseInIncomeChangeInput = (event)=>{
        setIncreaseInIncome(event.target.value)
    }

    const columns = [
        {
        field: 'intervalName',
        headerName: 'Interval Name',
        width: 150,
        },
        {
        field: 'year',
        headerName: 'Year',
        width: 150,
        },
        {
        field: 'percentage',
        headerName: 'Percentage',
        width: 110,
        },
    ]

    
    const [rows, setRows] = useState([])

    const [intervalName, setIntervalName] = useState('')
    const [year, setYear] = useState(2022)
    const [percentage, setPercentage] = useState(10)

    const addIncomeIncreasePeriod = () =>{
        setRows([...rows, {
            id: uuidv4(),
            intervalName: intervalName,
            year: year,
            percentage: percentage
        }])

        setIntervalName('') 
        setYear(2022) 
        setPercentage(10)

        handleDialogClose()
    }

    const handleDialogClose = ()=>{
        setDialogOpen(false)
    }

    const handleIntervalNameInput = (event)=>{
        setIntervalName(event.target.value)
    }
    
    const handleYearInput= (event)=>{
        setYear(event.target.value)
    }

    const handlePercentageInput = (event)=>{
        setPercentage(event.target.value)
    }

    let dialogBox = (
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Percentage increase in any interval</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="interval"
                    label="Interval Name"
                    fullWidth
                    variant="outlined" 
                    color="warning"
                    value={intervalName}
                    onChange={handleIntervalNameInput}
                />
                <TextField
                    margin="dense"
                    id="year"
                    label="Year"
                    type="number"
                    fullWidth
                    variant="outlined" 
                    color="warning"
                    value={year}
                    onChange={handleYearInput}
                />
                <TextField
                    margin="dense"
                    id="percentage"
                    label="Percentage"
                    type="number"
                    fullWidth
                    variant="outlined" 
                    color="warning"
                    value={percentage}
                    onChange={handlePercentageInput}
                />
                
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={addIncomeIncreasePeriod}>Save</Button>
                </DialogActions>
        </Dialog>
    )

    return(
        <section className='section'>
            <div className='section-question'>
                <h3>What is your Profession?</h3>
                <div className='question-input'>
                    <Stack direction="row" spacing={1}>
                        {professionList.map((prof, i)=>(
                            <Chip 
                            key={i}
                            sx={{ bgcolor: prof===profession ? '#FA9F89' : null }}
                            className='aa'
                            variant={prof===profession ? "filled": "outlined"} 
                            label={prof} 
                            onClick={()=>setProfession(prof)}
                            />
                        ))}
                    </Stack>
                </div>
            </div>
            <div className='section-question inline-question'>
                <h3>What is your Age?</h3>
                <div className='question-input half-input'>
                    <FormControl fullWidth>
                        <InputLabel color="warning" id="age-label">Age</InputLabel>
                        <Select
                            color="warning"
                            labelId="age-label"
                            id="age-select"
                            value={age}
                            label="Age"
                            onChange={handleAgeChange}
                            >
                            <MenuItem value={18}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='section-question inline-question'>
                <h3>You are financially taking care of (dependent)?</h3>
                <div className='question-input half-input'>
                    <FormControl fullWidth>
                        <InputLabel color="warning" id="dependent-label">Select</InputLabel>
                        <Select
                            labelId="dependent-label"
                            id="dependent-select"
                            value={financiallyDependent}
                            label="Select"
                            onChange={handleFinanciallyDependentChange}
                            color="warning"
                            >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='section-question inline-question'>
                <h3>Enter your Monthly Income</h3>
                <div className="question-input half-input">
                    <TextField 
                        id="income"
                        label="Monthly Income" 
                        variant="outlined" 
                        color="warning"
                        value={monthyIncome}
                        onChange={handleIncomeChangeInput}
                        fullWidth
                    />
                </div>
                <div className='question-input half-input'>
                    <Slider
                        aria-label="Income"
                        // defaultValue={350}
                        getAriaValueText={incomeValueText}
                        value={monthyIncome}
                        onChange={handleIncomeChange}
                        step={20}
                        min={100}
                        max={1000}
                        valueLabelDisplay="on"
                        sx={{color: "#FA9F89"}}
                        fullWidth
                    />
                </div>
            </div>
            <div className='section-question inline-question'>
                <h3>Increase in your income?</h3>
                <div className="question-input half-input">
                    <TextField 
                        id="increaseInIncome"
                        label="% Increase In Income" 
                        variant="outlined" 
                        color="warning"
                        value={increaseInIncome}
                        onChange={handleIncreaseInIncomeChangeInput}
                        fullWidth
                    />
                </div>
                <div className='question-input half-input'>
                    <Slider
                        aria-label="Income"
                        value={increaseInIncome}
                        onChange={handleIncreaseInIncomeChange}
                        step={1}
                        min={0}
                        max={100}
                        valueLabelDisplay="on"
                        sx={{color: "#FA9F89"}}
                        fullWidth
                    />                
                </div>
            </div>
            <div className='section-question'>
                <div className="question-header">
                    <h3>Percentage increase in any interval</h3>
                    <StyledButton onClick={()=>setDialogOpen(!dialogOpen)}>Add</StyledButton>
                    {dialogBox}
                </div>
                <div className="question-input" style={{ height: 300, width: 500}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                </div>


            </div>
        </section>
        
    )
}

export default BasicDetails;