import UnityEngine;
import System.Collections;

public class Players extends MonoBehaviour {

	public var speed = 10.0;
	public var isStanding = false;
	public var jetSpeed = 15.0;
	public var maxVelocity : Vector2 = new Vector2(3, 5);
	
	private Animator animator;

	private function Start(){

	}

	// Update is called once per frame
	private function Update () {
		var forceX = 0f;
		var forceY = 0f;

		var absVelX = Mathf.Abs (rigidbody2D.velocity.x);
		var absVelY = Mathf.Abs (rigidbody2D.velocity.y);
		
		if (absVelY < 0.1) {
			isStanding = true;
		} else {
			isStanding = false;
		}

		if (Input.GetKey("left")) {
			if (absVelX < maxVelocity.x) forceX = -1 * speed;
			transform.localScale = new Vector3(-1, 1, 1);
		} else if (Input.GetKey("right")) {
			if (absVelX < maxVelocity.x) forceX = speed;
			transform.localScale = new Vector3(1, 1, 1);
		}
		
		if (Input.GetKey("up")) {
			if (absVelY < maxVelocity.y) forceY = jetSpeed;
		}
		
		rigidbody2D.AddForce (new Vector2 (forceX, forceY));
	}
}