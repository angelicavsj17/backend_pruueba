INSERT INTO [dbo].[cars]
    (
        [mark],
        [hours_manufacturing],
        [quantity],
        [date_creation]
    )
VALUES 
    (
        @mark,
        @hours_manufacturing,
        @quantity,
        @date_creation
    )

SELECT SCOPE_IDENTITY() AS carsId