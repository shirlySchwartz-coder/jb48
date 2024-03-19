import React, { SyntheticEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import {
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Stack,
  Slider,
  Switch,
  Button,
} from '@mui/material';

import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

enum PriorityEnum {
  high = 'High',
  medium = 'Medium',
  low = 'Low',
}

type IFormInput = {
  songName: string;
  urlAddress: String;
  priority: string;
  volumeToPlay: number;
  repeat: boolean;
};

function AddToList() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [volume,setVolume] = useState(0);
  const [priority,setPriority] = useState("");
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    data.volumeToPlay=volume;
    data.priority=priority;
    console.log(data);
  }
  // const handleVolumeChange = (event: Event, newValue: number | number[]) => {
  //  //{...register('volumeToPlay')};
  // };


  const handleVolumeChange=(event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const handlePriorty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriority((event.target as HTMLInputElement).value);
  };


  return (
    <div className='AddToList Box'>
      <Typography variant='h4' className='HeadLine'>
        Add song to the list
      </Typography>

      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          id='outlined-required'
          label='Song Name'
          {...register('songName', { required: true })}
        />
        <br />
        <br />

        <TextField
          id='urlAddress'
          label='Url Address'
          variant='outlined'
          {...register('urlAddress')}
        />
        <br />

        <div className='Option-box'>
          <FormLabel id='priority-form'>Priority</FormLabel>
          <RadioGroup
            row
            aria-labelledby='priority-form'
            defaultValue='Medium'
            // value='priority'
            name="radio-button-group"
            // {...register('priority')}
            onChange={handlePriorty}
          >
            <FormControlLabel value='High' control={<Radio />} label='High' />
            <FormControlLabel value='Medium' control={<Radio />} label='Medium'/>
            <FormControlLabel value='Low' control={<Radio />} label='Low' />
          </RadioGroup>
        </div>
        <br />

        <div className=''>
          <label htmlFor='volume'>Volume</label>
          <Stack
            spacing={2}
            direction='row'
            sx={{ mb: 1 }}
            alignItems='center'
            
          >
            <VolumeDown />
            <Slider
              defaultValue={50}
              onChange={handleVolumeChange}
              aria-label='Default'
              valueLabelDisplay='auto'
              
            />
            <VolumeUp />
          </Stack>
        </div>
        <br />

        <FormControlLabel
          control={<Switch defaultChecked />}
          label='repeat'
          {...register('repeat')}
        />
        <br />
        <br />
        <Button variant='contained' type='submit' value='Add'>
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddToList;
