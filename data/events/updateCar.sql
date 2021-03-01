UPDATE [dbo].[cars]
SET [mark]=@mark,
    [hours_manufacturing]=@hours_manufacturing,
    [quantity]=@quantity,
    [date_creation]=@date_creation
   
WHERE [carsId]=@carsId

SELECT [carsId]
      ,[mark]
      ,[hours_manufacturing]
      ,[quantity]
      ,[date_creation]

  FROM [dbo].[cars]
  WHERE [carsId]=@carsId