# Stage 1: Build the application
FROM maven:3.8.4-openjdk-11 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:11-jre
COPY --from=build /app/target/your-spring-boot-app.jar /app/your-spring-boot-app.jar
WORKDIR /app
ENTRYPOINT ["java", "-jar", "your-spring-boot-app.jar"]
