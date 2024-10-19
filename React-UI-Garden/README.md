# Component Library Web Application


### Step 1: Clone the Repository

Open a terminal and clone the repository:

```bash
git clone https://github.com/GabaniArchie/React-UI-Garden.git
cd archie_gabani_ui_garden
```

### Step 2: Build the Docker Image

1. Open a terminal and navigate to the root directory of the project where the `Dockerfile` is located.
2. Build the Docker image using the following command:

   ```bash
   docker build -t cao_jiale_coding_assignment12 .
   ```

### Step 3: Run the Docker Container

  ```bash
  docker run -d -p 8083:8083 --name archie_gabani_ui_garden_assignment12 archie_gabani_ui_garden_assignment12
  ```

### Step 4: Access the Application
  ```bash
  http://localhost:8083
  ```