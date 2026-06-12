import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
data = pd.read_csv(
    "US_Accidents_March23.csv",
    nrows=50000
)

# Show first rows
print(data.head())

# Missing values
print(data.isnull().sum())

# Weather condition chart
plt.figure(figsize=(10,5))

top_weather = (
    data["Weather_Condition"]
    .value_counts()
    .head(10)
)

sns.barplot(
    x=top_weather.index,
    y=top_weather.values
)

plt.xticks(rotation=45)
plt.title("Top Weather Conditions in Accidents")
plt.xlabel("Weather")
plt.ylabel("Accident Count")
plt.show()

# Road condition severity
sns.countplot(
    x="Severity",
    data=data
)

plt.title("Accident Severity")
plt.show()

# Time analysis
data["Start_Time"] = pd.to_datetime(
    data["Start_Time"]
)

data["Hour"] = (
    data["Start_Time"]
    .dt.hour
)

plt.hist(
    data["Hour"],
    bins=24
)

plt.title("Accidents by Hour")
plt.xlabel("Hour of Day")
plt.ylabel("Count")
plt.show()