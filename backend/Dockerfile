# backend/Dockerfile

# 1. Base image
FROM python:3.12-slim

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy requirements and install
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# 4. Copy the rest of the backend code
COPY . .

# 5. Cloud Run uses $PORT (default 8080)
ENV PORT=8080

# 6. Expose port (optional but nice)
EXPOSE 8080

# 7. Start the server
# If your Flask app instance is named "app" in server.py, this is good:
CMD ["gunicorn", "-b", "0.0.0.0:8080", "server:app"]
