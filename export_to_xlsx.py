import pandas as pd

# Read csv file
csv_file = 'C:/Users/PC/Desktop/AI projects/attendance-recognition-app/attendance.csv'
df = pd.read_csv(csv_file)

# Export to xlsx
xlsx_file = 'C:/Users/PC/Desktop/AI projects/attendance-recognition-app/attendance.xlsx'
df.to_excel(xlsx_file, index=False)

print(f'csv file has been exported to {xlsx_file}')

