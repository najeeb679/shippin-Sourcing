import { COLORS } from "@muc/constant";
import { Box, Select,MenuItem,TextField, Typography,RadioGroup, FormControl, FormControlLabel, Radio, FormHelperText, } from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler,Controller  } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  form: string;
  to:string;
  value:string;
  dimensions:string;
  code:string;
  number: number;
  weight:number;
  message: string;
  agreement: string; 
  selectField:string;
  date:number;
};


const RequestQuoteForm = () => {
  const [hasValue, setHasValue] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <Typography
        variant="body1"
        fontSize={"36px"}
        fontFamily={"Exo"}
        mb={"30px"}
        fontWeight={800}
        color={COLORS.Black}
      >
        Request Quote
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} alignItems={"center"} mb={'10px'}>
          <Typography
            margin={"10px auto 5px 0px"}
            color={COLORS.Black}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            Full Name
          </Typography>

          <Box width={"70%"}>
            <TextField
              required
              fullWidth
              placeholder="Name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />

            {errors.name && (
              <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
                {errors.name.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} mb={'10px'}>
          <Typography
            margin={"5px auto 10px 0px"}
            variant="body2"
            color={COLORS.Black}
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            Email
          </Typography>
          <Box width={"70%"}>
            <TextField
              fullWidth
              required
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />
          </Box>
          {errors.email && (
            <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
              {errors.email.message}
            </Typography>
          )}
        </Box>
        <Box display={"flex"} alignItems={"center"} mb={'10px'}>
          <Typography
          color={COLORS.Black}
            margin={"10px auto 5px 0px"}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            Form
          </Typography>

          <Box width={"70%"}>
            <TextField
              required
              fullWidth
              placeholder="location"
              {...register("form", {
                required: { value: true, message: "Form is required" },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />

            {errors.form && (
              <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
                {errors.form.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display={"flex"}  mb={'10px'}>
          <Typography
          color={COLORS.Black}
            margin={"10px auto 5px 0px"}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            To
          </Typography>

          <Box width={"70%"}>
            <TextField
              required
              fullWidth
              placeholder="Destination"
              {...register("to", {
                required: { value: true, message: "Name is required" },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />

            {errors.to && (
              <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
                {errors.to.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display={'flex'}  mb={'10px'}>
        <Typography
            margin={"10px auto 5px 0px"}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            Description of Goods
          </Typography>
          <Box width={'70%'}>
   <TextField
            rows={5}
            multiline
            fullWidth
            placeholder="Message"
            {...register("message")}
            onChange={(e) => setHasValue(e.target.value.trim().length > 0)}

            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: `1px solid gray`,
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid gray`,
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
               "&.Mui-focused": {
                border:hasValue? ' 1px solid  #80bfff':
                '1px solid red',
boxShadow: hasValue
  ? "0 0 5px 1px #80bfff" 
  : "0 0 5px 1px  #ff8080", 
},
              },
              "& .MuiInputBase-input": {
                padding: "0",
                fontSize: "12px",
                borderRadius: "none",
                
                color:'#a3a3a3'
              },
            }}
          />
          </Box>
        </Box>
        <Box display={'flex'} mb={'10px'}>

        <Typography
        color={COLORS.Black}
            margin={"10px auto 5px 0px"}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
          Number of Pieces
          </Typography>
          <Box width={'70%'}>
          <TextField
            fullWidth
            type="number"
            required
            placeholder="Quantity"
            {...register("number", {
              required: { value: true, message: "Quantity is required" },
             
            })}
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: `1px solid gray`,
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid gray`,
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
               "&.Mui-focused": {
                border:hasValue? ' 1px solid  #80bfff':
                '1px solid red',
boxShadow: hasValue
  ? "0 0 5px 1px #80bfff" 
  : "0 0 5px 1px  #ff8080", 
},
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
                
                color:'#a3a3a3'
              },
            }}
          />
          {errors.number && (
            <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
              {errors.number.message}
            </Typography>
          )}

          </Box>
        </Box>
        <Box display={'flex'} mb={'10px'}>
  <Typography
    margin={"10px auto 5px 0px"}
    variant="body2"
    color={COLORS.Black}
    fontFamily={"Fira Sans"}
    width={"30%"}
    whiteSpace={"nowrap"}
    component={"label"}
  >
    Currency
  </Typography>
  <Box width={'70%'}>
    <FormControl fullWidth error={!!errors.selectField}>
      <Controller
        name="selectField"
        control={control}
        defaultValue=""
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <Select
            {...field}
            
            
            displayEmpty
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: `1px solid gray`,
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid gray`,
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
               "&.Mui-focused": {
                border:hasValue? ' 1px solid  #80bfff':
                '1px solid red',
boxShadow: hasValue
  ? "0 0 5px 1px #80bfff" 
  : "0 0 5px 1px  #ff8080", 
},
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
                
                color:'#a3a3a3'
              },
            }}
            
          >
            <MenuItem value="" disabled sx={{ color: 'gray' }}>
              Choose a value
            </MenuItem>
            <MenuItem sx={{ fontSize:'12px' }} value="option1">ZAR</MenuItem>
            <MenuItem sx={{fontSize:'12px' }} value="option2">USD</MenuItem>
            <MenuItem sx={{ fontSize:'12px' }} value="option3">GPB</MenuItem>
            <MenuItem sx={{ fontSize:'12px' }} value="option3">EURO</MenuItem>
          </Select>
        )}
      />
      {errors.selectField && <FormHelperText>{errors.selectField.message}</FormHelperText>}
    </FormControl>
  </Box>
</Box>
        <Box display={"flex"} alignItems={"center"} mb={'10px'}>
          <Typography
          color={COLORS.Black}
            margin={"10px auto 5px 0px"}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            Value of Goods
          </Typography>

          <Box width={"70%"}>
            <TextField
              required
              fullWidth
              placeholder="value"
              {...register("value", {
                required: { value: true, message: "Value is required" },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />

            {errors.value && (
              <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
                {errors.value.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb="10px">
        <Typography
        color={COLORS.Black}
          margin="10px auto 5px 0px"
          variant="body2"
          fontFamily="Fira Sans"
          width="30%"
          whiteSpace="nowrap"
          component="label"
        >
          Insurance Cover Required
        </Typography>
        <Box width="70%">
          <FormControl component="fieldset">
          
            <Controller
              name="agreement"
              control={control}
              rules={{ required: 'Please select an option' }}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              )}
            />
          </FormControl>
          {errors.agreement && (
            <Typography fontSize="12px" sx={{ color: '#d32f2f' }}>
              {errors.agreement.message}
            </Typography>
          )}
        </Box>
      </Box>
        <Box display={'flex'} mb={'10px'}>
        <Typography
        color={COLORS.Black}
            margin={"10px auto 5px 0px"}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
          Weight
          </Typography>
          <Box width={'70%'}>
          <TextField
            fullWidth
            type="number"
            required
            placeholder="Weight"
            {...register("weight", {
              required: { value: true, message: "Weight is required" },
             
            })}
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: `1px solid gray`,
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid gray`,
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
               "&.Mui-focused": {
                border:hasValue? ' 1px solid  #80bfff':
                '1px solid red',
boxShadow: hasValue
  ? "0 0 5px 1px #80bfff" 
  : "0 0 5px 1px  #ff8080", 
},
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
                
                color:'#a3a3a3'
              },
            }}
          />
          {errors.weight && (
            <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
              {errors.weight.message}
            </Typography>
          )}

          </Box>
        </Box>
         <Box display={'flex'} mb={'10px'}>
  <Typography
    margin={"10px auto 5px 0px"}
    variant="body2"
    color={COLORS.Black}
    fontFamily={"Fira Sans"}
    width={"30%"}
    whiteSpace={"nowrap"}
    component={"label"}
  >
    Weight Metric
  </Typography>
  <Box width={'70%'}>
    <FormControl fullWidth error={!!errors.selectField}>
      <Controller
        name="selectField"
        control={control}
        defaultValue=""
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <Select
            {...field}
            
            
            displayEmpty
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: `1px solid gray`,
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid gray`,
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
               "&.Mui-focused": {
                border:hasValue? ' 1px solid  #80bfff':
                '1px solid red',
boxShadow: hasValue
  ? "0 0 5px 1px #80bfff" 
  : "0 0 5px 1px  #ff8080", 
},
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
                
                color:'#a3a3a3'
              },
            }}
            
          >
            <MenuItem value="" disabled sx={{ color: 'gray' }}>
              Choose a value
            </MenuItem>
            <MenuItem sx={{ fontSize:'12px' }} value="option1">Kilogram</MenuItem>
            <MenuItem sx={{fontSize:'12px' }} value="option2">Pound</MenuItem>
            <MenuItem sx={{ fontSize:'12px' }} value="option3">Tone</MenuItem>
          </Select>
        )}
      />
      {errors.selectField && <FormHelperText>{errors.selectField.message}</FormHelperText>}
    </FormControl>
  </Box>
</Box>
        <Box display={"flex"} alignItems={"center"} mb={'10px'}>
          <Typography
          color={COLORS.Black}
            margin={"10px auto 5px 0px"}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            Dimensions
          </Typography>

          <Box width={"70%"}>
            <TextField
              required
              fullWidth
              placeholder="Dimensions"
              {...register("dimensions", {
                required: { value: true, message: "Name is required" },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />

            {errors.dimensions && (
              <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
                {errors.dimensions.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} mb={'10px'}>
          <Typography
            margin={"10px auto 5px 0px"}
            color={COLORS.Black}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            HS Code
          </Typography>

          <Box width={"70%"}>
            <TextField
              required
              fullWidth
              placeholder="HS Code"
              {...register("code", {
                required: { value: true, message: "Name is required" },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />

            {errors.code && (
              <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
                {errors.code.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} mb={'10px'}>
          <Typography
            margin={"10px auto 5px 0px"}
            color={COLORS.Black}
            variant="body2"
            fontFamily={"Fira Sans"}
            width={"30%"}
            whiteSpace={"nowrap"}
            component={"label"}
          >
            Shipping Date
          </Typography>

          <Box width={"70%"}>
            <TextField
              required
              type="date"
              fullWidth
              placeholder="Name"
              {...register("date", {
                required: { value: true, message: "Date is required" },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              onChange={(e) => setHasValue(e.target.value.trim().length > 0)}
              sx={{
                color: COLORS.Black,
                fontFamily: "Exo",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `1px solid gray`,
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: `1px solid gray`,
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                 "&.Mui-focused": {
                  border:hasValue? ' 1px solid  #80bfff':
                  '1px solid red',
  boxShadow: hasValue
    ? "0 0 5px 1px #80bfff" 
    : "0 0 5px 1px  #ff8080", 
},
                },
                "& .MuiInputBase-input": {
                  padding: "15px 10px",
                  fontSize: "12px",
                  borderRadius: "none",
                  
                  color:'#a3a3a3'
                },
              }}
            />

            {/* {errors.name && (
              <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
                {errors.name.message}
              </Typography>
            )} */}
          </Box>
        </Box>
       <input type="submit"  style={{backgroundColor:COLORS.Brown,color:COLORS.White,padding:'10px 20px',
        border:'none',fontSize:'13px',fontWeight:700,display:'flex',justifySelf:'end'}}/>


      
      </form>
    </>
  );
};

export default RequestQuoteForm;
