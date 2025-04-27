"""
Endpoints for the High School Management System API
"""

from fastapi import APIRouter, HTTPException
from fastapi.responses import RedirectResponse
from typing import Dict, Any

from ..database import activities_collection

router = APIRouter(
    prefix="/activities",
    tags=["activities"]
)

@router.get("/", response_model=Dict[str, Any])
def get_activities() -> Dict[str, Any]:
    """Get all activities with their details"""
    activities = {}
    for activity in activities_collection.find():
        name = activity.pop('_id')
        activities[name] = activity
    return activities

@router.post("/{activity_name}/signup")
def signup_for_activity(activity_name: str, email: str):
    """Sign up a student for an activity"""
    # Get the activity
    activity = activities_collection.find_one({"_id": activity_name})
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")

    # Validate student is not already signed up
    if email in activity["participants"]:
        raise HTTPException(
            status_code=400, detail="Already signed up for this activity")

    # Add student to participants
    result = activities_collection.update_one(
        {"_id": activity_name},
        {"$push": {"participants": email}}
    )

    if result.modified_count == 0:
        raise HTTPException(status_code=500, detail="Failed to update activity")
    
    return {"message": f"Signed up {email} for {activity_name}"}

@router.post("/{activity_name}/unregister")
def unregister_from_activity(activity_name: str, email: str):
    """Remove a student from an activity"""
    # Get the activity
    activity = activities_collection.find_one({"_id": activity_name})
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")

    # Validate student is signed up
    if email not in activity["participants"]:
        raise HTTPException(
            status_code=400, detail="Not registered for this activity")

    # Remove student from participants
    result = activities_collection.update_one(
        {"_id": activity_name},
        {"$pull": {"participants": email}}
    )

    if result.modified_count == 0:
        raise HTTPException(status_code=500, detail="Failed to update activity")
    
    return {"message": f"Unregistered {email} from {activity_name}"}